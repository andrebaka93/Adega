import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Usuario } from '../../shared/model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
 
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://' + window.location.host + '/api/clientes/';
  }

  consultarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl + 'ConsultarClientes');
  }

  salvarCliente(cliente: Cliente): Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseUrl + 'SalvarCliente', cliente, { headers: headers });
  }

  excluir(idCliente: number): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + 'ExcluirCliente', { params: { 'idCliente': idCliente.toString() }, responseType: 'json' });
  }

}
