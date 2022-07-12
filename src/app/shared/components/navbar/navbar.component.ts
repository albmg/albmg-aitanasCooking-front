import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartService } from 'src/app/customers/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  showMenu = false;

  faBars = faBars;
  faBasketShopping = faBasketShopping
  faLock = faLock

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService
  ) {}

  get usuario() {
    return this.authService.usuario
  }

  get badges() {
    return this.cartService.badgeMenu + this.cartService.badgeProduct
  }

  goToLogin() {
    this.router.navigateByUrl('/auth/login')
  }

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/auth')
      .then(() => {
        window.location.reload();
      });

  }
}
