import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/auth-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl

  constructor( private http: HttpClient) { }


  login( user_email: string, user_password: string) {

    const url = `${this.baseUrl}/auth/login`
    const body = { user_email, user_password }

    return this.http.post<AuthResponse>( url, body )
  }
}
