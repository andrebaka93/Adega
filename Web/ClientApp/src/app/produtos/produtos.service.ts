import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, Saida, Entrada } from '../../shared/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  header: HttpHeaders;
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://' + window.location.host + '/api/produtos/';
  }

  consultarProdutos(idCliente: number): Observable<Produto> {
    return this.http.get<Produto>(
      this.baseUrl + 'ConsultarProdutos', { params: { 'idCliente': idCliente.toString() }, responseType: 'json' });
  }

  salvarProduto(produto: Produto): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'Salvar', produto, { headers: headers });
  }

  excluir(idProduto: number): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'Excluir', idProduto, { headers: headers });
  }

  entrada(entrada: Entrada): Observable<any> {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'Entrada', entrada, { headers: headers });
  }

  saida(saida: Saida): Observable<any> {
    let headers = new HttpHeaders();
    return this.http.post(this.baseUrl + 'Saida', saida, { headers: headers });
  }
}
