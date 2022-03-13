import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private http: HttpClient ) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/products')
  }
}
