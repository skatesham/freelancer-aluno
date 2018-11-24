import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service';
import { Pedido } from '../models/pedido';
import { Usuario } from '../models/usuario';

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
   }

  ngOnInit() {
    this.pedidos = this.pedidosService.getPedidosByUsuario(this.usuario);
  }

}
