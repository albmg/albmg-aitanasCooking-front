import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aitanasCookingFront';

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  get usuario() {
    return this.authservice.usuario
  }

  goToLogin() {
    this.router.navigateByUrl('/auth/login')
  }


  logout() {
    this.router.navigateByUrl('/auth')
    this.authservice.logout()
  }
}
