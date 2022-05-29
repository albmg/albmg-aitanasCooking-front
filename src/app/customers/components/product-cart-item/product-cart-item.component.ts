import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {

  @Input() product!: Product

  constructor() { }

  ngOnInit(): void {
  }

}
