import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';
import { CustomersService } from '../../services/customers.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: string[] = []

  cartProduct: string[] = []

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log(this.cartService.menuCart)
    this.cartList = this.cartService.menuCart
  }

}
