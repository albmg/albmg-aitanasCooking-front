import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container {
      margin: 10px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  goToLogin() {
    this.router.navigateByUrl('/auth/login')
  }

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}
