import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomersService } from '../../services/customers.service';


@Component({
  selector: 'app-show-single-product',
  templateUrl: './show-single-product.component.html',
  styles: [
  ]
})
export class ShowSingleProductComponent implements OnInit {


  product!: Product;

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
        switchMap( ({ id }) => this.customersService.getProductById(id))
      )
      .subscribe( product => this.product = product )
  }

  goBack() {
    this.router.navigate(['/clientes/productos'])
  }

  minimizeList() {
    this.hideList = true
  }

  maximizeList() {
    this.hideList = false
  }

}
