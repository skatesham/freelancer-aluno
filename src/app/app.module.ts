import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CriarpedidoComponent } from './criarpedido/criarpedido.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PropostasComponent } from './propostas/propostas.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'criar-pedido', component: CriarpedidoComponent},
  {path: 'meus-pedidos', component: MeuspedidosComponent},
  {path: 'propostas', component: PropostasComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    LoginComponent,
    PedidosComponent,
    NavbarComponent,
    CriarpedidoComponent,
    MeuspedidosComponent,
    CadastroComponent,
    PropostasComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
