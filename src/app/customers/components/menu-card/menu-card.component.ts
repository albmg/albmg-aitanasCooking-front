import { Component, Input } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  @Input() menu!: Menu

  constructor(
    private cartService: CartService
  ) { }

  sendIdMenuToCart(id: string ) {
    console.log(this.menu._id)
    this.cartService.addItemToCart(id)

  }

}
