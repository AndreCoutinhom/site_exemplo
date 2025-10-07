import { Injectable } from '@angular/core';
import { Cliente } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'http://localhost:3000/clientes';


 constructor(private http: HttpClient) {}

 // Buscar os registros do arquivo `data_base.json`
  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  // Salvar novos registros no arquivo `data_base.json`
  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  // Excluir registros do arquivo `data_base.json`
  excluir(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.API + `/${id}`);
  }

}
