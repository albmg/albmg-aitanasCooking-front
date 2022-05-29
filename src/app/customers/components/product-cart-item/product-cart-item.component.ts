import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {

  @Input() product: any

  constructor() { }

  ngOnInit(): void {
  }

}
