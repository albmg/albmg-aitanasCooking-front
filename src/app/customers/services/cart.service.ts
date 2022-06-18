import { Injectable, OnInit } from '@angular/core';

import { Product } from '../interfaces/products.interface';
import { CustomersService } from './customers.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productCart: Product[] = []

  badgeOnCart: number = 0

  constructor(
    private custormerService: CustomersService
  ) { }

  sendProductToCart(product: Product) {
    this.productCart.push(product)
  }

  removeProductOnCart(id: string) {
    this.productCart = this.productCart.filter((prod) => prod._id !== id)
  }

  get totalPrice() {
    return this.productCart.reduce(function (accumulator, item) {
        return accumulator + item.defaultUnits * item.price;
    }, 0);
  }


}
