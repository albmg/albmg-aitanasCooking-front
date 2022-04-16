import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from 'src/app/customers/interfaces/products.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/customers/interfaces/menus.interface';


@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  // product services

  getProductById( id: string):Observable<Product>  {
    return this.http.get<Product>(`${ this.baseUrl }/products/${ id }`)
  }


  saveProduct( product: Product ): Observable<Product> {

    const url = `${ this.baseUrl }/products/me`
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token') || '')

    return this.http.post<Product>( url,  product, { headers })
  }

  upgradeProduct( id: string, product: Product ):Observable<Product> {
    const url = `${ this.baseUrl }/products/me/${ id }`
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token') || '')

    return this.http.put<Product>(url,  product, { headers })
  }

  deleteProduct(id: string): Observable<Product> {
    const url = `${ this.baseUrl }/products/me/${ id }`
    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '')

    return this.http.delete<Product>(url, { headers } )
  }

  // menus services

   getMenutById( id: string):Observable<Menu>  {
    return this.http.get<Menu>(`${ this.baseUrl }/menus/${ id }`)
   }

  saveMenu( menu: Menu ): Observable<Menu> {

    const url = `${ this.baseUrl }/menus/me`
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token') || '')

    return this.http.post<Menu>( url,  menu, { headers })
  }

 upgradeMenu( id: string, menu: Menu ):Observable<Menu> {
    const url = `${ this.baseUrl }/menus/me/${ id }`
    const headers = new HttpHeaders()
    .set('token', localStorage.getItem('token') || '')

    return this.http.put<Menu>(url,  menu, { headers })
  }

}
