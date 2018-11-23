import { Injectable } from '@angular/core';
import { pedidos } from './models/mock-pedidos';
import { Pedido } from './models/pedido';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  getPedidos(){
    return pedidos;
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

}
