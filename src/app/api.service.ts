import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthLoginInfo } from 'app/auth/auth-login-info';
import { SignUpInfo } from 'app/auth/sign-up-info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(usuario: any) {
    const url = `${this.apiURL}/usuarios/login`;
    return this.http.post<AuthLoginInfo>(url, usuario)
  }
    cadastraUsuario(usuario: any) {
    const url = `${this.apiURL}/usuarios`;
    return this.http.post<SignUpInfo>(url, usuario);
  }
}