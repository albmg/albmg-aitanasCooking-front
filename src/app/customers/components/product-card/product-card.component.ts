import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../../../shared/components/cart-dialog/cart-dialog.component';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {

  @Input() product!: Product

  buttonStatusChanged: boolean = false

  cart!: Product[]

  constructor(
    private cartService: CartService,
    public dialog: MatDialog

  ) { }


  ngOnInit(): void {

    this.cart = this.cartService.menuCart

    if (this.cart.map(m => m._id).includes(this.product._id)) {
      this.buttonStatusChanged = true
    }

  }

  handleAddProductToCart() {
    if (!this.cart.map(m => m._id).includes(this.product._id)) {
      this.buttonStatusChanged = true
      this.cartService.sendProductToCard(this.product)

      this.dialog.open(CartDialogComponent, {
        width: '600px',
        data: this.product
      })
    }
  }
}
