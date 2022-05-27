import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {

  @Input() product!: Product

  constructor(
    private customerService: CustomersService
  ) { }

   sendIdToCart(id: string ) {
    console.log(this.product._id)
    this.customerService.addItemToCart(id)
  }

}
