import { Component, OnInit, DoCheck } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/products.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {

  cartProductList: Product[] = []

  quantity: number = 0

  get totalPrice() {
    return this.cartService.totalPrice
  }

  get menuCart() {
    return this.cartService.menuCart.map(m => m.units)
  }

  constructor(
    private cartService: CartService
  ) { }

  ngDoCheck(): void {
    this.cartProductList = this.cartService.menuCart
  }

}
