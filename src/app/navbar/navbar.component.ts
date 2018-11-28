import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current: string;

  isCollapsed = true;

  constructor(private router:Router) {
    //this.checkLogin();
  }

  ngOnInit() {
    this.current = this.router.url;
  }
  
  logout(){
    localStorage.setItem('usuario', null);
    this.router.navigateByUrl('/');
  }

  checkLogin(){
    if(!localStorage.getItem('usuario')){
      this.logout();
    }
  }



}
