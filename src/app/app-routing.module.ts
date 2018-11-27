import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CriarpedidoComponent } from './criarpedido/criarpedido.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { PropostasComponent } from './propostas/propostas.component';
import { PropostapedidosComponent } from './propostapedidos/propostapedidos.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CriarpropostaComponent } from './criarproposta/criarproposta.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'perfil', component: PerfilComponent, canActivate:[AuthGuardService]},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'criar-pedido', component: CriarpedidoComponent},
  {path: 'meus-pedidos', component: MeuspedidosComponent},
  {path: 'propostas', component: PropostasComponent},
  {path: 'propostas-pedido', component: PropostapedidosComponent},
  {path: 'criar-proposta/:id', component:CriarpropostaComponent},
  {path: '**', component: LoginComponent},
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
