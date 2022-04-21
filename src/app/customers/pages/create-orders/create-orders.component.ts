import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
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
    email: ['claire@claire.com', [ Validators.required, Validators.pattern( this.vs.emailPattern )]],
    adress: ['Rue', [ Validators.required ]],
    phone: ['286', [ Validators.required ]],
    purchasedProducts: [[]],
    purchasedMenus: [[]],
    deliveryDate: ['', [Validators.required]],
    deliveryTime:['', [Validators.required, Validators.min(12), Validators.max(20)]]
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

    console.log(this.createOrderForm.controls.deliveryTime.value)
  }

  submit() {
    this.saveOrderService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }


  days = 4;
  orderDate = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000)

}
