import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Proposta } from '../models/proposta';
import { PropostasService } from '../services/propostas.service';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-propostapedidos',
  templateUrl: './propostapedidos.component.html',
  styleUrls: ['./propostapedidos.component.css']
})
export class PropostapedidosComponent implements OnInit {

  propostas: Proposta[];
  pedidoId: number;
  pedido: Pedido;
  url;

  constructor(private domSanitizer: DomSanitizer,private router:Router, private servicePropostas:PropostasService, private pedidosService:PedidosService) {
    this.pedidoId = parseInt(localStorage.getItem('pedido'));
   }

  ngOnInit() {
    this.setUp();
  }

  setUp(){
    this.propostas = this.servicePropostas.getPropostasByPedidoId(this.pedidoId);
    this.pedido = this.propostas[0].pedido;
  }

  responderProposta(resposta:boolean, proposta:Proposta){
    proposta = this.servicePropostas.reponderProposta(resposta, proposta);
    if(resposta){
      this.pedido = this.pedidosService.aceitarPedido(proposta.pedido, proposta);
      this.router.navigate(['/meus-pedidos']);
    } else{
      this.setUp();
    }
  }

}
