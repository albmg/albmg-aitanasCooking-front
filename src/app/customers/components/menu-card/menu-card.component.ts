import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';

import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../../../shared/components/cart-dialog/cart-dialog.component';

import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styles: []
})
export class MenuCardComponent implements OnInit {

  @Input() menu!: Menu

  buttonStatusChanged: boolean = false

  cart!: Menu[]

  constructor(
    private cartService: CartService,
    public dialog: MatDialog,
    private authService: AuthService
  ) { }


  get usuario() {
    return this.authService.usuario
  }

  ngOnInit(): void {

    this.cart = this.cartService.menuCart

    if (this.cart.map(m => m._id).includes(this.menu._id)) {
      this.buttonStatusChanged = true
    }
  }

  handleAddMenuToCart() {
    if (!this.cart.map(m => m._id).includes(this.menu._id)) {
      this.buttonStatusChanged = true
      this.cartService.sendMenuToCart(this.menu)
      this.cartService.badgeMenu = this.cart.length

      this.dialog.open(CartDialogComponent, {
        width: '600px',
        data: this.menu
      })
    }
  }

}
