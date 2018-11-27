import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Proposta } from '../models/proposta';
import { Usuario } from '../models/usuario';
import { PropostasService } from '../services/propostas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-criarproposta',
  templateUrl: './criarproposta.component.html',
  styleUrls: ['./criarproposta.component.css']
})
export class CriarpropostaComponent implements OnInit {

  usuario:Usuario;
  pedido:Pedido;
  proposta:Proposta = new Proposta(null, null, 'Título', 'Essa Descrição é um modelo para teste do formulário');

  constructor(private pedidosService:PedidosService, private propostasService:PropostasService,private router:Router, private route: ActivatedRoute) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
    let pedidoId: number;
    this.route.params.subscribe( params => {
      pedidoId =params.id
    });
    this.pedido = this.pedidosService.getPedidoById(pedidoId);
  }

  ngOnInit() {
  }

  enviarProposta(){
    this.proposta.usuario = this.usuario;
    this.proposta.pedido = this.pedido;
    this.pedido.propostas.push(this.proposta);
    this.propostasService.adicionarProposta(this.proposta);
    this.pedidosService.setPedido(this.pedido);
    this.router.navigate(['/propostas']);
  }

}
