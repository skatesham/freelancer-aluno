import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario';
import { Tag } from '../models/tag';
import { tags } from '../models/mock-tags';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-criarpedido',
  templateUrl: './criarpedido.component.html',
  styleUrls: ['./criarpedido.component.css']
})
export class CriarpedidoComponent implements OnInit {

  // ngModel to novo pedido
  titulo:string = 'Problemas com blog Flask ';
  disciplina:string = 'Laboratório de Banco de Dados';
  descricao:string = 'Não estou conseguindo criar uma arquitetura adequada para Flask usando MongoDb';
  tags:string = 'mongodb flask ads';
  usuario:Usuario;
  
  // atributos para alerta
  alerta:string;
  sucesso:boolean = false;
  falha:boolean = false;
  
  constructor(private pedidosService:PedidosService, private tagsService:TagsService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
   }

  ngOnInit() {
  }

  criarPedido(): void{
    let pedido:Pedido;
    let listaTags:Tag[] = new Array<Tag>();
    this.tags.split(' ').forEach(t => {
      let tag = this.tagsService.getOrCreateTag(t);
      listaTags.push(tag);
    });
    pedido = new Pedido(this.usuario,this.disciplina, this.titulo, this.descricao, listaTags);
    this.pedidosService.criarPedido(pedido);
    this.titulo = '';
    this.disciplina = '';
    this.descricao = '';
    this.tags = '';
    this.mostrarAlerta("Pedido criado com sucesso!", true);

  }

  mostrarAlerta(texto:string, sucesso:boolean){
    this.alerta = texto;
    if(sucesso){
      this.sucesso = sucesso;
    } else {
      this.falha = sucesso;
    }
  }
}
