import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';
import { Usuario } from '../models/usuario';
import { propostas } from '../models/mock-propostas';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];

  usuario: Usuario;

  constructor(private pedidosService:PedidosService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
    propostas;
   }

  ngOnInit() {
    this.pedidos = this.pedidosService.getPedidos();
  }

}
