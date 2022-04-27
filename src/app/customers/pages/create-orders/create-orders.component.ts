import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from '../../interfaces/menus.interface';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { ProtectedService } from '../../../protected/services/protected.service';

import { Order } from '../../interfaces/orders.interface';



import { MatCalendarCellClassFunction, MatCalendarCellCssClasses } from '@angular/material/datepicker';


@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styles: [
    `
    .mat-form-field {
      margin: 5px;
    }

    button.example-custom-date-class {
      background: orange;
      border-radius: 100%;
    }
    `
  ]
})
export class CreateOrdersComponent implements OnInit {

  products: Product[] = [];

  menus: Menu[] = []

  orders!: Order[]

  availableOrderDate!: Date

   days: number = 4

  createOrderForm: FormGroup = this.fb.group({
    clientName: ['Claire', [ Validators.required ]],
    email: ['claire@claire.com', [ Validators.required, Validators.pattern( this.vs.emailPattern )]],
    adress: ['Rue', [ Validators.required ]],
    phone: ['286', [ Validators.required ]],
    purchasedProducts: [[]],
    purchasedMenus: [[]],
    deliveryDate: ['' , [Validators.required]],
    deliveryTime:['', [Validators.required, Validators.min(12), Validators.max(19)]]
  }, { validators: this.vs.checkPurchasing })

  constructor( private selectProductService: CustomersService,
               private fb: FormBuilder,
               private saveOrderService: CustomersService,
               private vs: ValidatorService,
               private manageOrder: ProtectedService) { }

  ngOnInit(): void {

    this.selectProductService.getProducts()
    .subscribe( products => this.products = products )

    this.selectProductService.getMenus()
      .subscribe(menus => this.menus = menus)

    this.manageOrder.viewAllOrders()
      .subscribe(orders => this.orders = orders)

    this.availableOrderDate = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000)
    console.log(this.availableOrderDate)
  }

  submit() {
    this.saveOrderService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }

  myUnavailableDayFilter = (d: Date | null): boolean => {

    const time = d?.getTime();

    const getDatesFromOrders = this.orders.map(m => m.deliveryDate)


    const filterDeliveryDates = getDatesFromOrders.filter((item, index) => getDatesFromOrders.indexOf(item) != index).map(date => new Date(date))

    // check duplicates dates
    const myUnavailableDates = [...new Set(filterDeliveryDates)]


    console.log('this.myUnavailableDates', myUnavailableDates)
        return !myUnavailableDates.find(x=>x.getTime()==time);
  }

}
