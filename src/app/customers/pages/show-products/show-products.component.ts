import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styles: [
  ]
})
export class ShowProductsComponent implements OnInit {

  constructor( private productsService: CustomersService ) { }

  ngOnInit(): void {

    this.productsService.getProducts()
      .subscribe( resp => console.log (resp))
  }

}
