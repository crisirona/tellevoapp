import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,private http:HttpClient,private us:UserService) { }

  ngOnInit() {
  }

  redirectToInicio(){
    this.router.navigateByUrl("/inicio")
  }

  createUser(){
    this.http.post(this.us.API,'username')
  }

}
