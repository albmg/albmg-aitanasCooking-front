import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProductList: Product[] = []

  constructor(
    private cartService: CartService,
    private cs: CustomersService
  ) { }

  ngOnInit(): void {
    //console.log(this.cartService.menuCart)
    //this.cartList = this.cartService.menuCart

   /*  this.cartService.getItem()
      .subscribe((product: Product) => {
        this.addProductToCart(product)
        this.cartProduct = product.name
        console.log('soy list', this.cartProductList)
        console.log('soy product', this.cartProduct)
      }) */

    this.cartProductList = this.cartService.menuCart
  }



  /* addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartProductList) {
      if (this.cartProductList[i]._id === product._id) {
        console.log('false')
        productExists = true
        break;
      }
    }

    if (!productExists) {
      console.log('ok')
      console.log(this.cartProductList.length)
      console.log(this.cartProductList)
      this.cartProductList.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
        ingredients: product.ingredients,
        createdDate: product.createdDate
      })
    }


  } */


}
