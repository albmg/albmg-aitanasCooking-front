import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Menu } from '../../interfaces/menus.interface';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-menu-cart-item',
  templateUrl: './menu-cart-item.component.html',
  styleUrls: ['./menu-cart-item.component.css']
})
export class MenuCartItemComponent implements OnInit {

  @Input() product!: Menu

  units = new FormControl(1);

  menuQuantity: any = ''

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
