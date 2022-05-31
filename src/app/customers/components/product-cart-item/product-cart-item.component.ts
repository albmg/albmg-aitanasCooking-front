import { Component, Input, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Product } from '../../interfaces/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})


export class ProductCartItemComponent implements OnInit{

  @Input() product!: Product
  @Input() totalPrice: number = 0

  value: number = this.quantity;

  /* addQuantityForm: FormGroup = this.fb.group({
    units: ['']
  }) */

  units = new FormControl(0);

  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.units.setValue(this.cartService.quantity)
  }

  get quantity() {
    return this.cartService.quantity
  }

  get valueInput() {
    return this.units.value
  }

  removeCartItem(id: string) {
    this.cartService.removeProductOnCart(id)
    this.cartService.badgeOnCart = this.cartService.menuCart.length
  }

  caculcatePrice() {

    this.cartService.quantity = this.valueInput
    console.log(this.valueInput)
    console.log(this.quantity)

    this.cartService.totalPrice = this.valueInput * this.product.price
  }
}
