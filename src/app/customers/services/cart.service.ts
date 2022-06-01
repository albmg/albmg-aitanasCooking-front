import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuCart: Product[] = []

  badgeOnCart: number = 0

  totalPrice: number = 0

  quantity: any[] = [
    /* { qty: 1, id: '6220e9bed35877c20787b90f' },
    { qty: 3, id: '6224bc2e1e737c87a92836f4' },
    { qty: 2, id: '6224bc481e737c87a92836f6' } */
  ]


  constructor() { }

  sendProductToCart(product: Product) {
    this.menuCart.push(product)
  }

  removeProductOnCart(id: string) {
    this.menuCart = this.menuCart.filter((prod) => prod._id !== id)
  }

}
