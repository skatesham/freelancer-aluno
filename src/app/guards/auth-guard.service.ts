import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  private isAuthenticated: boolean = false;

  constructor(private router: Router) {
    if(localStorage.getItem('usuario')){
      this.isAuthenticated = true;
    }
  }

  canActivate(){
    if(!this.isAuthenticated){
      this.router.navigate(['/']); 
      console.log("Não Autenticado");
    }
    return this.isAuthenticated;
  }
}
