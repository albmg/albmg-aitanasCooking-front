import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Menu } from '../../interfaces/menus.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-show-single-menu',
  templateUrl: './show-single-menu.component.html',
  styles: [
  ]
})

export class ShowSingleMenuComponent implements OnInit {

  menu!: Menu;

  constructor( private activatedRoute: ActivatedRoute,
               private customersService: CustomersService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.customersService.getMenuById(id))
      )
      .subscribe( menu => this.menu = menu )

  }

}
