import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuarioModel';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nick:string = 'UsuarioCadastrado';
  email:string = 'user@gmail.com';
  tel:string = '1239239090';
  password:string = '123';

  submit:boolean = false;

  constructor(private usuariosService:UsuariosService, private router:Router) { }

  ngOnInit() {
  }

  cadastrar(){
    this.submit = true;
    let usuario = new UsuarioModel(this.nick, this.email, this.password, this.tel);
    this.usuariosService.criarUsuario(usuario).subscribe((usuario: UsuarioModel) => {
      if (usuario != null) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.router.navigate(['/perfil']);
      } else {
        this.submit = false;
      }
    });

  }

}
