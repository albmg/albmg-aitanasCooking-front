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

  nuevoFavorito: FormControl = this.fb.control('')

  createOrderForm: FormGroup = this.fb.group({
    clientName: ['Claire', [ Validators.required ]],
    email: ['claire@claire.com', [ Validators.required, Validators.pattern( emailPattern )]],
    adress: ['Rue', [ Validators.required ]],
    phone: ['286', [ Validators.required ]],
    purchasedProducts: [''],
    purchasedMenus: ['']
  })

  constructor( private selectProductService: CustomersService,
               private fb: FormBuilder,
               private saveOrderService: CustomersService ) { }

  ngOnInit(): void {

    this.selectProductService.getProducts()
    .subscribe( products => this.products = products )

    this.selectProductService.getMenus()
    .subscribe( menus => this.menus = menus )
  }

  submit() {
    console.log( this.createOrderForm.value )

    this.saveOrderService.saveOrder( this.createOrderForm.value )
      .subscribe( resp => {
        console.log('Respuesta', resp)
      })
  }

}
