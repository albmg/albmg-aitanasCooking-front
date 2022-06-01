import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ComplexOuterSubscriber } from 'rxjs/internal/innerSubscribe';
import { Product } from '../../interfaces/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})


export class ProductCartItemComponent implements OnInit {

  @Input() product!: Product

  value: number = 0;

  units = new FormControl(0);


  productQuantity: any = ''

  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {

    this.cartService.quantity.map(product => {
      if (product.id === this.product._id) {
        this.units.setValue(product.qty)
      }
    })

  }


  removeCartItem(id: string) {
    this.cartService.removeProductOnCart(id)
    this.cartService.badgeOnCart = this.cartService.menuCart.length
  }


  setQuantity(id: string) {

    this.productQuantity = { qty: this.units.value, id: this.product._id }

    this.cartService.quantity.push(this.productQuantity)

  }

  caculcatePrice(id: string) {

    console.log(this.cartService.menuCart = this.cartService.menuCart.filter((prod) => prod._id === id))

    this.cartService.totalPrice = this.units.value * this.product.price
    console.log(this.product._id)
  }
}
