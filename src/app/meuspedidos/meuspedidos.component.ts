import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario';
import { propostas } from '../models/mock-propostas';

@Component({
  selector: 'app-meuspedidos',
  templateUrl: './meuspedidos.component.html',
  styleUrls: ['./meuspedidos.component.css']
})
export class MeuspedidosComponent implements OnInit {

  pedidos: Pedido[];
  usuario: Usuario;

  constructor(private pedidosService: PedidosService) {
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


}
