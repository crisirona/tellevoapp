import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectHome(){
    this.router.navigateByUrl("/home")
  }

  crearViaje(hora,min,ampm,valor){

    localStorage.setItem('hora',hora.value)
    localStorage.setItem('min',min.value)
    localStorage.setItem('ampm',ampm.value)
    localStorage.setItem('valor',valor.value)
    this.router.navigateByUrl("/tuviaje")
  }
}
