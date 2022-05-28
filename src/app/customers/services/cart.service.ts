import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuCart: string[] = []

  constructor() { }

  addItemToCart(id: string ) {
    this.menuCart.push(id)
  }
}
