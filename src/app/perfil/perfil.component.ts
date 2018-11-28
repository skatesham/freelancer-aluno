import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tag } from '../models/tag';
import { TagsService } from '../services/tags.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  tags: Tag[];
  file;
  url: any;

  constructor(
    private usuariosService: UsuariosService,
    private tagsService: TagsService,
    private domSanitizer: DomSanitizer) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
    
  }

  ngOnInit() {
    this.tags = this.tagsService.getTags();
    this.url = this.domSanitizer.bypassSecurityTrustUrl(this.usuario.imagem);
  }

  uploadFile(evt) {
    this.file = evt.target.files[0];
    if (this.file != null) {
      let reader = new FileReader();

      reader.onload = (e) => {
        //console.log(reader.result.toString());
        this.url = this.domSanitizer.bypassSecurityTrustUrl(reader.result.toString());
        this.usuario.imagem = reader.result.toString();
        this.usuariosService.atualizarUsuario(this.usuario);
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
      }

      reader.readAsDataURL(this.file);
    }
  }
  
  salvarInfo(){
    
  }
}
