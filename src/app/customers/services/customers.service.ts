import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/products.interface';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menus.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private http: HttpClient ) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/products')
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/api/menus')
  }

  getMenuById( id: string ): Observable<Menu> {
    return this.http.get<Menu>(`http://localhost:3000/api/menus/${ id }`)
  }
}
