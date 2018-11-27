import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario';
import { Tag } from '../models/tag';
import { tags } from '../models/mock-tags';
import { TagsService } from '../services/tags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarpedido',
  templateUrl: './criarpedido.component.html',
  styleUrls: ['./criarpedido.component.css']
})
export class CriarpedidoComponent implements OnInit {

  usuario: Usuario;
  pedido: Pedido = new Pedido(null, 'Problemas com blog Flask', 'Laboratório de Banco de Dados', 'Não estou conseguindo criar uma arquitetura adequada para Flask usando MongoDb', null, 'ads');

  constructor(private router:Router, private pedidosService: PedidosService, private tagsService: TagsService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
  }

  ngOnInit() {
  }

  criarPedido(): void {
    // Tramento das tags em texto separadas por espaço
    let listaTags: Tag[] = new Array<Tag>();
    this.pedido.tagString.split(' ').forEach(t => {
      let tag = this.tagsService.getOrCreateTag(t);
      listaTags.push(tag);
    });

    // criação do pedido
    this.pedido.usuario = this.usuario;
    this.pedido.tags = listaTags;
    this.pedidosService.criarPedido(this.pedido);
    this.router.navigate(['/pedidos']);
  }

}
