import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-single-menu',
  templateUrl: './show-single-menu.component.html',
  styles: [
  ]
})
export class ShowSingleMenuComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => console.log (id))

  }

}
