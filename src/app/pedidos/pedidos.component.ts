import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';
import { Usuario } from '../models/usuario';
import { propostas } from '../models/mock-propostas';
import { PropostasService } from '../services/propostas.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PedidoModel } from '../models/pedidoModel';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioModel } from '../models/usuarioModel';
import { TagsService } from '../services/tags.service';
import { TagModel } from '../models/tagModel';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: PedidoModel[];

  usuario: Usuario;

  url:any;

  constructor(private domSanitizer: DomSanitizer, private router:Router,
     private pedidosService:PedidosService,
      private propostasService:PropostasService,
      private usuariosService:UsuariosService,
      private tagsService:TagsService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
    propostas;
   }

  ngOnInit() {
    this.pedidosService.getPedidos().subscribe( (pedidos:PedidoModel[]) => {
      
      this.usuariosService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
        pedidos.forEach( pedido => {
          usuarios.forEach( usuario => {
            if(pedido.usuario_id === usuario._id){
              pedido.usuario = usuario;
            }
          });
          /*
          console.log(pedido.tags)
          pedido.tags.forEach( (tag_id) => {
            this.tagsService.getTagById(tag).subscribe((t:TagModel) => {
              tag = t;
            })
          });
          */
        });
        this.pedidos = pedidos;
      });
      
    });

  }

  verPropostas(pedido:Pedido){
    //localStorage.setItem('pedido', JSON.stringify(pedido));
    localStorage.setItem("pedido", pedido.id +"");
    this.router.navigate(['/propostas-pedido']);
  }

  getQuantidadeAberto(pedido:Pedido): number{
    let count = 0;
    this.propostasService.getPropostasByPedido(pedido).forEach( p => {
      if(p.aberto){
        count++;
      }
    })
    return count;
  }

  buscarConteudo(usuario_id:string){
    this.usuariosService.getById(usuario_id).subscribe((usuario:UsuarioModel) => {
      return usuario;
    });
  }


}
