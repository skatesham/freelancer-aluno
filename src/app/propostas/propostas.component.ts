import { Component, OnInit } from '@angular/core';
import { Proposta } from '../models/proposta';
import { PropostasService } from '../services/propostas.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css']
})
export class PropostasComponent implements OnInit {

  usuario: Usuario;
  propostas: Proposta[];

  constructor(private propostasService: PropostasService) {
    let u = localStorage.getItem('usuario');
    this.usuario = JSON.parse(u);
   }

  ngOnInit() {
    this.getPropostasByUsuario();
  }

  getPropostasByUsuario(){
    this.propostas = this.propostasService.getPropostasByUsuario(this.usuario);
  }

  fecharProposta(proposta: Proposta){
    this.propostasService.fecharProposta(proposta);
    this.getPropostasByUsuario();
  }

  abrirProposta(proposta: Proposta){
    this.propostasService.abrirProposta(proposta);
    this.getPropostasByUsuario();
  }

}
