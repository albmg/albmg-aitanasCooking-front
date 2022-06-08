import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/products.interface';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menus.interface';
import { environment } from '../../../environments/environment';
import { Order } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${ this.baseUrl }/products`)
  }

  getProductById( id: string ): Observable<Product>{
    return this.http.get<Product>(`${ this.baseUrl }/products/${ id }`)
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${ this.baseUrl }/menus`)
  }

  getMenuById( id: string ): Observable<Menu> {
    return this.http.get<Menu>(`${ this.baseUrl }/menus/${ id }`)
  }

  saveOrder( order: Order ): Observable<Order> {
    return this.http.post<Order>(`${ this.baseUrl }/orders`, order)
  }
}
