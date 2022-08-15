import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/customers/interfaces/orders.interface';
import { ProtectedService } from '../../services/protected.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styles: [
  ]
})
export class ViewOrdersComponent implements OnInit {


  orderFromBackend!: Order

  constructor(
    private activatedRoute: ActivatedRoute,
    private protectedService: ProtectedService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.protectedService.getOrderById( id ))
      )
      .subscribe(order => {
        this.orderFromBackend = order
        console.log( 'que paso' , this.orderFromBackend )
      })

  }

}
