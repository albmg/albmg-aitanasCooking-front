import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth-interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';



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


  register( user_username: string, user_email: string, user_password: string ) {

    const url = `${this.baseUrl}/auth/signup`
    const body = { user_username, user_email, user_password }

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          console.log('resp del login',resp)
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token!)
            /* this._usuario = {
              id: resp.id!,
              email: resp.email!,
              username: resp.username!
            } */
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(false) )
      )
  }


  login( user_email: string, user_password: string) {

    const url = `${this.baseUrl}/auth/login`
    const body = { user_email, user_password }

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          console.log('resp del login',resp)
          if ( resp.ok ) {
            localStorage.setItem('token', resp.token!)
           /*  this._usuario = {
              id: resp.id!,
              email: resp.email!,
              username: resp.username!
            } */
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(false) )
      )
  }

  validateToken(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/me`
    const headers = new HttpHeaders()
      .set('token', localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>( url, { headers })
      .pipe(
        map( resp => {
      //localStorage.setItem('token', resp.token!)
             this._usuario = {
              id: resp.id!,
              email: resp.email!,
              username: resp.username!
            }
         /*  localStorage.getItem('token')
          console.log('console del validate', resp) */
          //console.log('console del validate', resp.ok)
          return resp.ok
        }),
        catchError( err => of(false))
      )
  }

  logout() {
    localStorage.clear();
  }
}
