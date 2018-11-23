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

  getUsuarioByEmail(email:string): Usuario {
    let usuario = null;
    usuarios.forEach(u => {
      if(u.email == email){
        usuario = u;
      }     
    });
    return usuario; 
  }

  adicionar(u:Usuario){
    usuarios.push(u);
  }
  
}
