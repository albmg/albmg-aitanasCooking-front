import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from 'src/app/customers/interfaces/products.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProtectedService {

  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient ) { }

  getProductById( id: string):Observable<Product>  {
    return this.http.get<Product>(`${ this.baseUrl }/products/${ id }`)
  }


  saveProduct( product: Product ): Observable<Product> {

    const url = `${ this.baseUrl }/products/me`
    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '')

    return this.http.post<Product>( url,  product, { headers })
  }
}
