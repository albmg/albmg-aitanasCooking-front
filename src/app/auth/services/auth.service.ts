import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth-interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  private _usuario!: Usuario

  get usuario() {
    return { ...this._usuario}
  }

  constructor( private http: HttpClient) { }


  login( user_email: string, user_password: string) {

    const url = `${this.baseUrl}/auth/login`
    const body = { user_email, user_password }

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( resp.ok ) {
            this._usuario = {
              email: resp.email
            }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(false) )
       /*  tap( resp => {
          if ( resp.token ){
            localStorage.setItem('token', resp.token)
          }
        }) */
      )
  }

  validateToken() {

    const url = `${this.baseUrl}/auth/me`
    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '')

    return this.http.get( url, { headers })
  }
}
