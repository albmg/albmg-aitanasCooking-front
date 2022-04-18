import { Component, OnInit } from '@angular/core';
import { ProtectedService } from '../../services/protected.service';
import { Order } from '../../../customers/interfaces/orders.interface';
import { Product } from '../../../customers/interfaces/products.interface';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styles: [
    `
    table {
      width: 100%;
    }
    `
  ]
})


export class ManageOrdersComponent implements OnInit {

  order: Order[] = []

  displayedColumns: string[] = ['clientName', 'email', 'address', 'phone', 'date'];

  constructor( private manageOrder: ProtectedService) { }

  ngOnInit(): void {
    this.manageOrder.viewAllOrders()
      .subscribe(orders => {
        this.order = orders
      })
  }

}
