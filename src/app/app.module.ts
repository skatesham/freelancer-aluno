import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosService } from './usuarios.service';

const routes: Routes = [
  {path: '', component: PerfilComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
