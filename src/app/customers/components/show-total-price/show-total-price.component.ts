import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-show-total-price',
  templateUrl: './show-total-price.component.html',
  styleUrls: ['./show-total-price.component.css']
})
export class ShowTotalPriceComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  get totalPrice() {
    return this.cartService.totalPrice
  }
}
