import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Menu } from '../../interfaces/menus.interface';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-menu-cart-item',
  templateUrl: './menu-cart-item.component.html',
  styles: []
})
export class MenuCartItemComponent implements OnInit {

  @Input() menu!: Menu

  units = new FormControl(1);

  menuQuantity: any = ''

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {

    this.cartService.menuCart.map(menu => {
      if (menu._id === this.menu._id) {
        this.units.setValue(menu.defaultUnits)
      }
    })
  }

  removeCartItem(id: string) {
    this.cartService.removeMenuOnCart(id)
    //this.cartService.badgeOnCart = this.cartService.menuCart.length
    this.cartService.badgeMenu = this.cartService.menuCart.length

  }


  setQuantity(id: string) {

    this.cartService.menuCart.map(menu => {
      if (id === menu._id) {
        this.menu.defaultUnits = this.units.value
      }
    })
  }

}
