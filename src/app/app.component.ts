import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { CartService } from './customers/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aitanasCookingFront';

  constructor(
    private router: Router,
    private authservice: AuthService,
    private cartService: CartService
  ) { }


  get usuario() {
    return this.authservice.usuario
  }

  get badges() {
    return this.cartService.badgeOnCart
  }

  goToLogin() {
    this.router.navigateByUrl('/auth/login')
  }

  logout() {
    this.router.navigateByUrl('/auth')
    this.authservice.logout()
  }


}
