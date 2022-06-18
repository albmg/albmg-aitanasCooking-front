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

  constructor(
    private cartService: CartService
  )
  {
    if (this.cartService.productCart.length > 0) {
      window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
        event.returnValue = "Unsaved modifications";
        return event;
      });
    }
  }

  get totalPrice() {
    return this.cartService.totalPrice
  }

  /* get menuCart() {
    return this.cartService.menuCart.map(m => m.units)
  } */


  ngDoCheck(): void {
    this.cartProductList = this.cartService.productCart
  }

}
