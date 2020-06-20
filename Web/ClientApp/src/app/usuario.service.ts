import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Login, Usuario } from '../shared/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string;
  headers: HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://' + window.location.host + '/api/Usuario/';
  }

  logar(login: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl + 'Logar', login, { headers: this.headers });
  }

  salvarUsuario(usuario: Usuario): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'CadastroUsuario', usuario, { headers: this.headers });
  }

  consultarUsuario(idCliente: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + 'ConsultarUsuarios', {
      params: { idCliente: idCliente.toString() }, responseType: 'json'
    });
  }

  excluir(idUsuario: number): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + 'ExcluirUsuario', { params: { 'idUsuario': idUsuario.toString() }, responseType: 'json' });
  }
}
