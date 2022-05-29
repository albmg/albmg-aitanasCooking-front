import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuCart: Product[] = []

  buttonStatusChanged:boolean = false


  //subject = new Subject<Product>()

  constructor() { }

 /*  sendItem(product: Product) {
    //console.log(product)
    this.subject.next(product)
  }

  getItem() {
    return this.subject.asObservable()
  }
 */
 /*  addItemToCart(id: string ) {
    this.menuCart.push(id)
  } */

  sendProductToCard(product: Product) {
    //this.buttonStatusChanged = true
    this.menuCart.push(product)
  }
}
