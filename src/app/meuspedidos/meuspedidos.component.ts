import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario';
import { propostas } from '../models/mock-propostas';
import { Router } from '@angular/router';
import { PropostasService } from '../services/propostas.service';

@Component({
  selector: 'app-meuspedidos',
  templateUrl: './meuspedidos.component.html',
  styleUrls: ['./meuspedidos.component.css']
})
export class MeuspedidosComponent implements OnInit {

  pedidos: Pedido[];
  usuario: Usuario;

  constructor(private router:Router, private pedidosService: PedidosService, private propostasService:PropostasService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
    propostas;
   }

  ngOnInit() {
    this.getPedidosByUsuario();
  }

  getPedidosByUsuario(){
    this.pedidos = this.pedidosService.getPedidosByUsuario(this.usuario);
  }

  fecharPedido(pedido:Pedido){
    this.pedidosService.fecharPedido(pedido);
    this.getPedidosByUsuario();
  }

  abrirPedido(pedido:Pedido){
    this.pedidosService.abrirPedido(pedido);
    this.getPedidosByUsuario();
  }

  verPropostas(pedido:Pedido){
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

}
