import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: string[] = []

  cartProduct: string[] = []

  constructor(
    private customerService: CustomersService
  ) { }

  ngOnInit(): void {
    console.log(this.customerService.menuCart)
    this.cartList = this.customerService.menuCart

  }

}
