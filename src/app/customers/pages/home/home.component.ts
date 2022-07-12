import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  /* goToLogin() {
    this.router.navigateByUrl('/auth/login')
  } */

  goToProducts() {
    this.router.navigateByUrl('/clientes/productos')
  }

  goToMenus() {
    this.router.navigateByUrl('/clientes/menus')
  }

  /* goToOrders() {
    this.router.navigateByUrl('/clientes/pedidos')
  } */

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}
