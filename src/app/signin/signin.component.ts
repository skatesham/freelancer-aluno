import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    LinkedinLoginProvider
} from 'angular-6-social-login';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent implements OnInit {

  constructor( private socialAuthService: AuthService, private router:Router, private usuariosService: UsuariosService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        //console.log(userData);

        // Tratando novo usuario Google e Facebook
        let email = userData.email;
        let login;
        let usuario = login.usuario;
        this.usuariosService.getUsuarioByEmail(email).subscribe(data => login = data, err => console.log(err))
        if(usuario != null){
          this.router.navigate(['/perfil']);
          localStorage.setItem("usuario", JSON.stringify(usuario));
        } else {
          usuario = new Usuario('', userData.email, userData.token, '', userData.image); 
          localStorage.setItem("usuario", JSON.stringify(usuario));     
          this.router.navigate(['/poscadastro']);
        }
      }
    );
  }
  ngOnInit(){
    
  }
  
}