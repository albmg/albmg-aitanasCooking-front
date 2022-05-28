import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';

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

  constructor(
    private cartService: CartService,

    public dialog: MatDialog

  ) { }

   sendIdToCart(id: string ) {
     console.log(this.product._id)
     this.cartService.addItemToCart(id)
     this.dialog.open(CartDialogComponent, {
       width: '600px',
       data: this.product
     })
  }
}
