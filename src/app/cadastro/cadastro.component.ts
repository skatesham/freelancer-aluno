import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

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

  constructor(private usuariosService:UsuariosService, private router:Router) { }

  ngOnInit() {
  }

  cadastrar(){
    let usuario = new Usuario(this.nick, this.email, this.password, this.tel);
    this.usuariosService.adicionar(usuario);
    this.router.navigate(['/']);
  }

}
