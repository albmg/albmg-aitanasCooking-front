import { Component, OnInit } from '@angular/core';
import { ProtectedService } from '../../services/protected.service';
import { Order } from '../../../customers/interfaces/orders.interface';
import { ActivatedRoute } from '@angular/router';

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

  orders: Order[] = []

  displayedColumns: string[] = ['clientName', 'email', 'date', 'button'];



  constructor(private manageOrder: ProtectedService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.manageOrder.viewAllOrders()
      .subscribe(orders => {
        this.orders = orders
      })
  }

}
