import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { Product } from '../../interfaces/products.interface';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})


export class ProductCartItemComponent implements OnInit {

  @Input() product!: Product

  units = new FormControl(1);

  productQuantity: any = ''

  preArra: any[] = []

  constructor(
    private cartService: CartService,
  ) { }


  ngOnInit(): void {

    this.cartService.menuCart.map(product => {
      if (product._id === this.product._id) {
        this.units.setValue(product.units)
      }
    })
  }


  removeCartItem(id: string) {
    this.cartService.removeProductOnCart(id)
    this.cartService.badgeOnCart = this.cartService.menuCart.length
  }


  setQuantity(id: string) {

    this.cartService.menuCart.map(product => {
      if (id === product._id) {
        this.product.units = this.units.value
      }
    })

    console.log(this.units.value)
  }

  incQ(id: string) {

    this.cartService.menuCart.map(product => {
      if (id === product._id && this.product.units <= 3 ) {
        this.units.setValue( this.product.units + 1 )
      }
    })
  }

  decQ(id: string) {
    this.cartService.menuCart.map(product => {
      if (id === product._id && (this.product.units <= 3 || this.product.units >= 1 )) {
        this.units.setValue( this.product.units - 1 )

      }
    })
  }

}
