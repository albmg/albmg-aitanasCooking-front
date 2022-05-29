import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuCart: Product[] = []

  constructor() { }

  sendProductToCard(product: Product) {
    this.menuCart.push(product)
  }
}
