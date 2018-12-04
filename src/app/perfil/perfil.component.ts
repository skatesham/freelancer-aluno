import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tag } from '../models/tag';
import { TagsService } from '../services/tags.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuarioModel } from '../models/usuarioModel';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: UsuarioModel;
  tags: Tag[];
  file;
  url: any;

  fileSubmited: boolean = false;
  submited: boolean = false;

  // Form tratamento
  esconder: boolean = true;

  constructor(
    private usuariosService: UsuariosService,
    private tagsService: TagsService,
    private domSanitizer: DomSanitizer) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
    this.tags = this.tagsService.getTags();
    this.url = this.domSanitizer.bypassSecurityTrustUrl(this.usuario.imagem);
  }

  uploadFile(evt) {
    this.fileSubmited = true;
    this.file = evt.target.files[0];
    if (this.file != null) {
      let reader = new FileReader();

      reader.onload = (e) => {
        //console.log(reader.result.toString());
        this.usuario.imagem = reader.result.toString();
        //let imagem = this.resizeImage.resize(reader, 100, 100, this.resizeImage.PNG);
        this.updateInfo(this.usuario);
      }

      reader.readAsDataURL(this.file);
    }
  }

  salvarInfo() {
    this.submited = true;
    this.updateInfo(this.usuario);
  }

  updateInfo(usuario: UsuarioModel) {
    this.usuariosService.atualizarUsuario(usuario).subscribe((usuario: UsuarioModel) => {
      if (usuario != null) {
        this.usuario = usuario;
        this.url = this.domSanitizer.bypassSecurityTrustUrl(usuario.imagem);
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
      }
      this.submited = false;
      this.fileSubmited = false;
    }, (err) => {
      console.log(err);
      this.submited = false;
      this.fileSubmited = false;
    });
  }

}
