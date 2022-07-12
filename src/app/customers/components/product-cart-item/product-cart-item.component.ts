import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Product } from '../../interfaces/products.interface';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styles: []
})


export class ProductCartItemComponent implements OnInit {

  @Input() product!: Product

  units = new FormControl(1);

  productQuantity: any = ''


  constructor(
    private cartService: CartService,
  ) { }


  ngOnInit(): void {

    this.cartService.productCart.map(product => {
      if (product._id === this.product._id) {
        this.units.setValue(product.defaultUnits)
      }
    })
  }


  removeCartItem(id: string) {
    this.cartService.removeProductOnCart(id)
    //this.cartService.badgeOnCart = this.cartService.productCart.length
    this.cartService.badgeProduct = this.cartService.productCart.length
  }


  setQuantity(id: string) {

    this.cartService.productCart.map(product => {
      if (id === product._id) {
        this.product.defaultUnits = this.units.value
      }
    })
  }

}
