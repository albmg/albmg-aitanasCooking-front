import { Component, Input } from '@angular/core';
import { Menu } from '../../interfaces/menus.interface';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  @Input() menu!: Menu

}
