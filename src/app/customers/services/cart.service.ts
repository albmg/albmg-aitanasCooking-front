import { Injectable, OnInit } from '@angular/core';

import { Product } from '../interfaces/products.interface';
import { CustomersService } from './customers.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuCart: Product[] = []

  badgeOnCart: number = 0

  constructor(
    private custormerService: CustomersService
  ) { }

  sendProductToCart(product: Product) {
    this.menuCart.push(product)
  }

  removeProductOnCart(id: string) {
    this.menuCart = this.menuCart.filter((prod) => prod._id !== id)
  }

  get totalPrice() {
    return this.menuCart.reduce(function (accumulator, item) {
        return accumulator + item.units * item.price;
    }, 0);
  }


}
