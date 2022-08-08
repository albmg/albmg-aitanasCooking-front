import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../../../shared/components/cart-dialog/cart-dialog.component';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/auth/services/auth.service';



@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: []
})

export class ProductCardComponent implements OnInit {

  @Input() product!: Product

  buttonStatusChanged: boolean = false

  cart!: Product[]

  constructor(
    private cartService: CartService,
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  get usuario() {
    return this.authService.usuario
  }

  ngOnInit(): void {

    this.cart = this.cartService.productCart

    if (this.cart.map(m => m._id).includes(this.product._id)) {
      this.buttonStatusChanged = true
    }
  }

  handleAddProductToCart() {
    if (!this.cart.map(m => m._id).includes(this.product._id)) {
      this.buttonStatusChanged = true
      this.cartService.sendProductToCart(this.product)
      this.cartService.badgeProduct = this.cart.length

      this.dialog.open(CartDialogComponent, {
        width: '600px',
        data: this.product
      })
    }
  }
}
