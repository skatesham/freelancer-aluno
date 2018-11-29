import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-poscadastro',
  templateUrl: './poscadastro.component.html',
  styleUrls: ['./poscadastro.component.scss']
})
export class PoscadastroComponent implements OnInit {
  
  usuario: Usuario;

  constructor(private router: Router, private usuariosService:UsuariosService) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
   }

  ngOnInit() {
  }

  posCadastro(){
    this.usuariosService.adicionar(this.usuario);
    localStorage.setItem("usuario", JSON.stringify(this.usuario));
    this.router.navigate(['/perfil']);
  }
}
