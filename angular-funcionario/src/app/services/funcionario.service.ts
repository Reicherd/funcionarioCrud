import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';

const url = 'http://localhost:8080/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(url);
  }

  findById(id: any): Observable<Funcionario> {
    return this.http.get(`${url}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(url, data);
  }

  update(id: number, funcionario: Funcionario): Observable<any> {
    return this.http.put(`${url}/${id}`, funcionario);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

  findByNome(nome: string): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${url}/find-by-nome/${nome}`);
  }
}
