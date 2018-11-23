import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';
import { usuarios } from './models/mock-usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuario(): Usuario[] {
    return usuarios;
  };

  adicionar(u:Usuario){
    usuarios.push(u);
  }
  
}
