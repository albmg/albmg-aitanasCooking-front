import { Component, OnInit, DoCheck } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/products.interface';
import { Menu } from '../../interfaces/menus.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements DoCheck {

  cartProductList: Product[] = []

  cartMenuList: Menu[] = []

  quantity: number = 0

  constructor(
    private cartService: CartService
  )
  {
    if (this.cartService.productCart.length > 0 || this.cartService.menuCart.length > 0 ) {
      window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
        event.returnValue = "Unsaved modifications";
        return event;
      });
    }
  }

  get totalPrice() {
    return this.cartService.totalProductPrice + this.cartService.totalMenuPrice
  }

  ngDoCheck(): void {
    this.cartProductList = this.cartService.productCart
    this.cartMenuList = this.cartService.menuCart
  }

}
