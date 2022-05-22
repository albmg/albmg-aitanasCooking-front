import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from '../../interfaces/menus.interface';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { ProtectedService } from '../../../protected/services/protected.service';

import { Order } from '../../interfaces/orders.interface';

import { MatDialog } from '@angular/material/dialog';

import { MapScreenComponent } from '../../../maps/screens/map-screen/map-screen.component';

import { MapService } from '../../../maps/services/map.service';





@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styles: [
    `
    .mat-form-field {
      margin: 5px;
    }

    .example-custom-date-class {
      background-color: orange;
      border-radius: 100%;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CreateOrdersComponent implements OnInit, DoCheck  {

  products: Product[] = [];

  menus: Menu[] = []

  orders!: Order[]

  availableOrderDate!: Date

  days: number = 4

  nombreUsuarioEnCreateOrder: string = ''


  createOrderForm: FormGroup = this.fb.group({
    clientName: ['Claire', [ Validators.required ]],
    email: ['claire@claire.com', [ Validators.required, Validators.pattern( this.vs.emailPattern )]],
    adress: [ '' , [ Validators.required ]],
    phone: ['286', [ Validators.required ]],
    purchasedProducts: [[]],
    purchasedMenus: [[]],
    deliveryDate: ['' , [Validators.required]],
    deliveryTime: ['', [Validators.required, Validators.min(12), Validators.max(19)]],
    distance: [],
    duration: []
  }, { validators: this.vs.checkPurchasing })

  constructor(
    private customerService: CustomersService,
    private manageOrder: ProtectedService,
    private mapService: MapService,
    private vs: ValidatorService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.customerService.getProducts()
      .subscribe(products => this.products = products)

    this.customerService.getMenus()
      .subscribe(menus => this.menus = menus)

    this.manageOrder.viewAllOrders()
      .subscribe(orders => this.orders = orders)

    this.availableOrderDate = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000)

  }

  ngDoCheck(): void {
    this.createOrderForm.patchValue({ adress: this.mapService.userMarkerLocation })

  }

  submit() {
    this.customerService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }

  myUnavailableDayFilter = (d: Date | null): boolean => {

    if( !this.orders ) throw Error('No orders')

    const time = d?.getTime();

    const getDatesFromOrders = this.orders.map(m => m.deliveryDate)


    const filterDeliveryDates = getDatesFromOrders.filter((item, index) => getDatesFromOrders.indexOf(item) != index).map(date => new Date(date))

    // check duplicates dates
    const myUnavailableDates = [...new Set(filterDeliveryDates)]

    //disable these days on date picker
    return !myUnavailableDates.find(x=>x.getTime()==time);
  }

  showMapDialog() {
    this.dialog.open(MapScreenComponent, {
      width: '500px',
    })
  }

}
