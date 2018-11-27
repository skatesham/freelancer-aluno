import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';
import { Usuario } from '../models/usuario';
import { propostas } from '../models/mock-propostas';
import { PropostasService } from '../services/propostas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[];

  usuario: Usuario;

  constructor(private router:Router, private pedidosService:PedidosService, private propostasService:PropostasService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
    propostas;
   }

  ngOnInit() {
    this.pedidos = this.pedidosService.getPedidos();
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

  enviarProposta(pedido:Pedido){
    this.router.navigate(['/criar-proposta/'+pedido.id]);
  }

}
