import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Proposta } from '../models/proposta';
import { PropostasService } from '../services/propostas.service';

@Component({
  selector: 'app-propostapedidos',
  templateUrl: './propostapedidos.component.html',
  styleUrls: ['./propostapedidos.component.css']
})
export class PropostapedidosComponent implements OnInit {

  propostas: Proposta[];
  pedidoId: number;

  constructor(private servicePropostas:PropostasService) {
    this.pedidoId = parseInt(localStorage.getItem('pedido'));
   }

  ngOnInit() {
    this.propostas = this.servicePropostas.getPropostasByPedidoId(this.pedidoId);
  }

}
