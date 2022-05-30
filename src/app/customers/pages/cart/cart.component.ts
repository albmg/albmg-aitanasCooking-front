import { Component, OnInit, DoCheck } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/products.interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {

  cartProductList: Product[] = []

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.menuCart
  }

  ngDoCheck(): void {
    this.cartProductList = this.cartService.menuCart
  }

}
