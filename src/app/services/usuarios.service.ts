import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { usuarios } from '../models/mock-usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  urlbase: string = 'https://freelancer-aluno.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  /**
   * Busca de usuario por Email no servidor Node
   * @param email Email para busca de usuario
   */
  getUsuarioByEmail(email: string) {
    let url = this.urlbase + 'usuariosByEmail/' + email;
    return this.http.get(url, this.httpOptions);
  }

  login(email: string, senha: string) {
    let url = this.urlbase + "login"
    return this.http.post(url, { 'email': email, 'senha': senha }, this.httpOptions);
  }

  oldGetUsuarioByEmail(email: string) {
    let usuario = null;
    usuarios.forEach(u => {
      if (u.email == email) {
        usuario = u;
      }
    });
    return usuario;
  }

  criarUsuario(usuario: any) {
    let url = this.urlbase + "usuarios";
    delete usuario._id;
    return this.http.post(url, usuario, this.httpOptions);

  }

  adicionar(u: Usuario) {
    usuarios.push(u);
  }

  atualizarUsuario(usuario: any) {
    let url = this.urlbase + "usuarios/" + usuario._id;
    return this.http.put(url, usuario, this.httpOptions);
  }

  /* imprime no console a mensagem de erro */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} falhou: ${error.message}`);
      return of(result as T);
    };
  }

}
