import { Injectable } from '@angular/core';
import { Proposta } from '../models/proposta';
import { propostas } from '../models/mock-propostas';
import { Usuario } from '../models/usuario';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PropostasService {

  constructor() { }

  getPropostasByPedido(pedido: Pedido): Proposta[] {
    let propostasPedido: Proposta[] = new Array<Proposta>();
    propostas.forEach((p: Proposta) => {
      if(p.pedido.id === pedido.id && p.aberto){
        propostasPedido.push(p);
      }
    });
    return propostasPedido;
  }

  getPropostasByPedidoId(id: number): Proposta[] {
    let propostasPedido: Proposta[] = new Array<Proposta>();
    propostas.forEach((p: Proposta) => {
      if(p.pedido.id === id && p.aberto){
        propostasPedido.push(p);
      }
    });
    return propostasPedido;
  }

  getPropostasByUsuario(u : Usuario): Proposta[] {
    let propostasUsuario: Proposta[] = new Array<Proposta>();
    propostas.forEach((p: Proposta) => {
      if(p.usuario.id === u.id){
        propostasUsuario.push(p);
      }
    });
    return propostasUsuario;
  }

  fecharProposta(proposta:Proposta){
    propostas.forEach(p => {
      if(p.id == proposta.id){
        p.aberto = false;
      }
    });
  }

  abrirProposta(proposta:Proposta){
    propostas.forEach(p => {
      if(p.id == proposta.id){
        p.aberto = true;
      }
    });
  }
  
  setProposta(proposta:Proposta){
    for (let index = 0; index < propostas.length; index++) {
      const p:Proposta = propostas[index];
      if(p.id === proposta.id){
        propostas[index] = proposta;
        break;
      }
    }
  }

  reponderProposta(resposta:boolean, proposta:Proposta): Proposta{
    proposta.avaliado = true;
    proposta.aceita = resposta;
    this.setProposta(proposta);
    return proposta;
  }
  
}
