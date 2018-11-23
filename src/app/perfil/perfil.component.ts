import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../models/usuario';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { Tag } from '../models/tag';
import { TagsService } from '../tags.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarios: Usuario[];
  tags: Tag[];

  constructor(private route: ActivatedRoute, private usuariosService: UsuariosService, private tagsService: TagsService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuario();
    this.tags = this.tagsService.getTags();
  }

}
