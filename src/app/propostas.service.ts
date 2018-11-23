import { Injectable } from '@angular/core';
import { Proposta } from './models/proposta';
import { propostas } from './models/mock-propostas';
import { Usuario } from './models/usuario';
import { Pedido } from './models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PropostasService {

  constructor() { }

  getPropostasByPedido(p: Pedido): Proposta[] {
    let propostasPedido: Proposta[] = new Array<Proposta>();
    propostas.forEach((p: Proposta) => {
      if(p.pedido.id === p.id){
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
}
