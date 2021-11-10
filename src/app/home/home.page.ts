import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:string
  state: boolean=false
  constructor(private router:Router) {}

  ngOnInit() {
    this.user=localStorage.getItem('usuario')
    if(localStorage.getItem('usuario')){
      this.state=true
    }else{
      this.state=false
    }
  }
  redirectToViaje(){
    this.router.navigateByUrl("/viaje")
  }

  redirectToLogin(){
    this.router.navigateByUrl("/login")
  }

  clearStorage(){
    localStorage.clear()
    this.router.navigateByUrl("/home")
  }
}
