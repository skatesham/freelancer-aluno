import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioModel } from '../models/usuarioModel';

@Component({
  selector: 'app-poscadastro',
  templateUrl: './poscadastro.component.html',
  styleUrls: ['./poscadastro.component.scss']
})
export class PoscadastroComponent implements OnInit {

  usuario: UsuarioModel;
  submit:boolean = false;

  constructor(private router: Router, private usuariosService: UsuariosService) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
  }

  posCadastro() {
    this.submit = true;
    this.usuariosService.criarUsuario(this.usuario).subscribe((usuario: UsuarioModel) => {
      if (usuario != null) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        this.router.navigate(['/perfil']);
      } else {
        this.submit = false;
      }
    });

  }
  
}
