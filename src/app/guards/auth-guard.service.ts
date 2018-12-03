import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  usuario: Usuario;
  token: string;

  constructor(private router: Router) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.token = localStorage.getItem('token');
  }

  canActivate(): boolean {
    //console.log(this.usuario.nick);
    if (this.usuario == null && this.token == null) {
      this.router.navigate(['/']);
      alert("Não Autenticado");
      //console.log("Não Autenticado");
      return false;
    }
    //console.log("Autenticado");
    return true;
  }
}
