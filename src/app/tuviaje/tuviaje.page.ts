import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuviaje',
  templateUrl: './tuviaje.page.html',
  styleUrls: ['./tuviaje.page.scss'],
})
export class TuviajePage implements OnInit {

  hora:string
  min:string
  ampm:string
  valor:string

  constructor(private router:Router) { }

  ngOnInit() {
    this.min = localStorage.getItem('min')
    this.hora = localStorage.getItem('hora')
    this.ampm = localStorage.getItem('ampm')
    this.valor = localStorage.getItem('valor')
  }
  redirectHome(){
    this.router.navigateByUrl("/home")
  }


}
