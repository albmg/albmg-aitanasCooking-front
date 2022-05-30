import { Component, Input, DoCheck } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})


export class ProductCartItemComponent {

  @Input() product!: Product

  constructor(
    private cartService: CartService
  ) { }

  removeCartItem(id: string) {
    this.cartService.removeProductOnCart(id)
    this.cartService.badgeOnCart = this.cartService.menuCart.length
  }
}
