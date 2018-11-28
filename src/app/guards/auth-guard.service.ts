import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  usuario: Usuario;

  constructor(private router: Router) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  canActivate() : boolean{
    console.log(this.usuario.nick);
    if(this.usuario == null){
      this.router.navigate(['/']); 
      console.log("Não Autenticado");
      return false;
    }
    console.log("Autenticado");
    return true;
  }
}
