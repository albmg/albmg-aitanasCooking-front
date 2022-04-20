import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';
import { Menu } from '../../interfaces/menus.interface';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styles: [
    `
    .mat-form-field {
      margin: 5px;
    }
    `
  ]
})
export class CreateOrdersComponent implements OnInit {

  products: Product[] = [];

  menus: Menu[] = []


  createOrderForm: FormGroup = this.fb.group({
    clientName: ['Claire', [ Validators.required ]],
    email: ['claire@claire.com', [ Validators.required, Validators.pattern( emailPattern )]],
    adress: ['Rue', [ Validators.required ]],
    phone: ['286', [ Validators.required ]],
    purchasedProducts: [[]],
    purchasedMenus: [[]],
    deliveryDate: ['', [ Validators.required ]]
  }, { validators: this.vs.checkPurchasing })

  constructor( private selectProductService: CustomersService,
               private fb: FormBuilder,
               private saveOrderService: CustomersService,
               private vs: ValidatorService) { }

  ngOnInit(): void {

    this.selectProductService.getProducts()
    .subscribe( products => this.products = products )

    this.selectProductService.getMenus()
      .subscribe(menus => this.menus = menus)

    console.log(this.nextDate)
  }

  submit() {
    this.saveOrderService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }


  days = 4;
  // Date.now() gives the epoch date value (in milliseconds) of current date
  nextDate = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000)

}
