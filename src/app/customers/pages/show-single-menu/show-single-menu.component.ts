import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { AuthService } from 'src/app/auth/services/auth.service';
import { Menu } from '../../interfaces/menus.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-show-single-menu',
  templateUrl: './show-single-menu.component.html',
  styles: []
})

export class ShowSingleMenuComponent implements OnInit {

  menu!: Menu;

  hideList: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private router: Router,
    private authService: AuthService,
  ) { }

  get usuario() {
    return this.authService.usuario
  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.customersService.getMenuById(id))
      )
      .subscribe( menu => this.menu = menu )

  }

  goBack() {
    this.router.navigate(['/clientes/menus'])
  }

  minimizeList() {
    this.hideList = true
  }

  maximizeList() {
    this.hideList = false
  }

}
