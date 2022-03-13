import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private http: HttpClient ) { }


  getProducts() {
    return this.http.get('http://localhost:3000/api/products')
  }
}
