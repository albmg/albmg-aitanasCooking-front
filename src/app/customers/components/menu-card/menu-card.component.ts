import { Component, Input } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  @Input() menu!: Menu

  constructor(
    private customerService: CustomersService
  ) { }

  sendIdToCart(id: string ) {
    console.log(this.menu._id)
    this.customerService.addItemToCart(id)
  }

}
