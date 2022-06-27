import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  showMenu = false;

  faBars = faBars;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor() { }
}
