import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menus.interface';

import { Product } from '../interfaces/products.interface';
import { CustomersService } from './customers.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productCart: Product[] = []

  menuCart: Menu[] = []


  badgeProduct: number = 0

  badgeMenu: number = 0

  //badgeOnCart: number = 0

  constructor() {}

  sendProductToCart(product: Product) {
    this.productCart.push(product)
  }

  sendMenuToCart(menu: Menu) {
    this.menuCart.push(menu)
  }

  removeProductOnCart(id: string) {
    this.productCart = this.productCart.filter((prod) => prod._id !== id)
  }

  removeMenuOnCart(id: string) {
    this.menuCart = this.menuCart.filter((menu) => menu._id !== id)
  }

 /*  get totalPrice() {
    return this.productCart.reduce(function (accumulator, item) {
        return accumulator + item.defaultUnits * item.price;
    }, 0);
  } */


  get totalProductPrice() {
    return this.productCart.reduce(function (accumulator, item) {
        return accumulator + item.defaultUnits * item.price;
    }, 0);
  }

  get totalMenuPrice() {
    return this.menuCart.reduce(function (accumulator, item) {
        return accumulator + item.defaultUnits * item.price;
    }, 0);
  }

}
