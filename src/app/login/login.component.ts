import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = 'sham.vinicius@gmail.com';
  password:string = '';

  erro:boolean = false;
  erroDesc:string = '';

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  login(): void{
    let usuario: Usuario = this.usuariosService.getUsuarioByEmail(this.email);
    if(usuario != null){
      if(usuario.senha === this.password){
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.router.navigate(['/perfil']);
      } else {
        this.loginErro("Erro! A senha está incorreta.");
      }
    } else {
      this.loginErro("Erro! O email não foi encontrado.");
    }
  
  }

  loginErro(desc:string) : void{
    this.erro = true;
    this.erroDesc = desc;
  }

}
