import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from 'src/app/shared/validator/validations';
import { Menu } from '../../interfaces/menus.interface';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styles: [
  ]
})
export class CreateOrdersComponent implements OnInit {

  products: Product[] = [];

  menus: Menu[] = []

  createOrderForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.pattern( emailPattern )]],
    adress: ['', [ Validators.required ]],
    phone: ['', [ Validators.required ]]
  })

  constructor( private selectProductService: CustomersService,
               private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.selectProductService.getProducts()
    .subscribe( products => this.products = products )

    this.selectProductService.getMenus()
    .subscribe( menus => this.menus = menus )
  }

  submit() {
    console.log( this.createOrderForm.value )
  }

}
