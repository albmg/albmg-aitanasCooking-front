import { Component, OnInit, DoCheck } from '@angular/core';

import { switchMap } from 'rxjs/operators'

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {

  cartProductList: Product[] = []

  quantity: number = 0

  constructor(
    private cartService: CartService,
    private custormerService: CustomersService
  ) { }

  get totalPrice() {
    return this.cartService.totalPrice
  }

  get menuCart() {
    return this.cartService.menuCart.map(m => m.units)
  }


  ngDoCheck(): void {
    this.cartProductList = this.cartService.menuCart
  }

}
