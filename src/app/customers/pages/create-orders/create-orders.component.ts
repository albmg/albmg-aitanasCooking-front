import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  createOrderForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.pattern( this.emailPattern )]],
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
    console.log('hola')
  }

}
