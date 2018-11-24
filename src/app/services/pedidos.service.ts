import { Injectable } from '@angular/core';
import { pedidos } from '../models/mock-pedidos';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario';
import { propostas } from '../models/mock-propostas';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() {
  }

  getPedidos(){
    let listaPedidos: Pedido[] = new Array<Pedido>();
    pedidos.forEach(p => {
      if(p.aberto){
        listaPedidos.push(p);
      }
    });
    return listaPedidos;
  }

  getPedidosByUsuario(u: Usuario){
    let listaPedidos: Pedido[] = new Array<Pedido>();
    pedidos.forEach(p => {
      if(p.usuario.id === u.id){
        listaPedidos.push(p);
      }
    });
    return listaPedidos;
  }

  criarPedido(pedido:Pedido){
    pedidos.push(pedido);
  }

  fecharPedido(pedido:Pedido){
    pedidos.forEach(p => {
      if(p.id == pedido.id){
        p.aberto = false;
      }
    });
  }

  abrirPedido(pedido:Pedido){
    pedidos.forEach(p => {
      if(p.id == pedido.id){
        p.aberto = true;
      }
    });
  }

  excluirPedido(pedido:Pedido){
    for (let index = 0; index < pedidos.length; index++) {
      const element = pedidos[index];
      if(element.id == pedido.id){
        pedidos.splice(index, 1);
      }
    }
  }

}
