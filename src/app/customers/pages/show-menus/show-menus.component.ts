import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-show-menus',
  templateUrl: './show-menus.component.html',
  styles: [
  ]
})
export class ShowMenusComponent implements OnInit {

  menus: Menu[] = [];

  constructor( private menusService: CustomersService) { }

  ngOnInit(): void {

    this.menusService.getMenus()
      .subscribe( menus => this.menus = menus )
  }

}
