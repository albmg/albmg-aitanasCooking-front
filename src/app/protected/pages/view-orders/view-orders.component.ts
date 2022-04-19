import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styles: [
  ]
})
export class ViewOrdersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params
      //.subscribe( ({id}) => console.log(id))
      .subscribe(resp => console.log(resp))
  }

}
