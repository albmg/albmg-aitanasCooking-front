import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styles: []
})

export class ShowProductsComponent implements OnInit {

  products: Product[] = [];

  constructor( private productsService: CustomersService ) { }

  ngOnInit(): void {

    this.productsService.getProducts()
      .subscribe( products => this.products = products )
  }

}
