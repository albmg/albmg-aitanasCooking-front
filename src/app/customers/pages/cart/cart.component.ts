import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductList: Product[] = []

  productExists = false

  productId: string = ''

  constructor(
    private cartService: CartService,
    private cs: CustomersService
  ) { }

  ngOnInit(): void {
    this.cartProductList = this.cartService.menuCart
  }

}
