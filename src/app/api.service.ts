import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from 'app/model/usuario-login';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  login(usuario: any) {
    const url = `${this.apiURL}/usuarios/login`;
    return this.http.post<UsuarioLogin>(url, usuario)
  }
    cadastraUsuario(usuario: any) {
    const url = `${this.apiURL}/usuarios`;
    return this.http.post<Usuario>(url, usuario);
  }
}