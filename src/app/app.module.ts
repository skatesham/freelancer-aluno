import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
} from "angular-6-social-login";

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CriarpedidoComponent } from './criarpedido/criarpedido.component';
import { MeuspedidosComponent } from './meuspedidos/meuspedidos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PropostasComponent } from './propostas/propostas.component';
import { PropostapedidosComponent } from './propostapedidos/propostapedidos.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CriarpropostaComponent } from './criarproposta/criarproposta.component';
import { SigninComponent } from './signin/signin.component';
import { PoscadastroComponent } from './poscadastro/poscadastro.component';


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("508186649661205")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("160329161709-eerr7po494jsd4t3sbhd9o6ni7qevq05.apps.googleusercontent.com")
      }/*,
      {
        id: LinkedinLoginProvider.PROVIDER_ID,
        provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
      },*/
    ]
)
  return config;
}

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
    PropostapedidosComponent,
    CriarpropostaComponent,
    SigninComponent,
    PoscadastroComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
