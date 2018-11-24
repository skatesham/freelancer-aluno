import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current: string;
  
  constructor(private router:Router) { 
    if(localStorage.getItem('usuario') == null){
      alert("Usuario Não Autenticado")
      this.logout();
    }
  }

  ngOnInit() {
    this.current = this.router.url;
  }

  logout(){
    localStorage.setItem('usuario', null);
    this.router.navigateByUrl('/');
  }

}
