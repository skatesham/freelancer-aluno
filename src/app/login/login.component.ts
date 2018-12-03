import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { UsuarioModel } from '../models/usuarioModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = 'sham.vinicius@gmail.com';
  password: string = '123';

  usuario;

  erro: boolean = false;
  erroDesc: string = '';

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  login(): void {
    this.usuariosService.getUsuarioByEmail(this.email).subscribe(usuario => {
      console.log(usuario);
      if (usuario != null) {
        this.usuario = usuario;
        this.loginRequest();

      } else {
        this.loginErro("Erro! O email não foi encontrado.");
      }
    });

  }

  loginRequest() {

    this.usuariosService.login(this.usuario['email'], this.password).subscribe(login => {
      if (login['success']) {
        localStorage.setItem("token", JSON.stringify(this.usuario.token));
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
        this.router.navigate(['/perfil']);
      } else {
        this.loginErro("Erro! A senha está incorreta.");
      }
    });
  }

  loginErro(desc: string): void {
    this.erro = true;
    this.erroDesc = desc;
  }

}
