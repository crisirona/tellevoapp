import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  user: User = {
    username: '',
    password: '',
    password2:'',
    rol:'user'
  }

  constructor(private router:Router,private http:HttpClient,private us:UserService) { }

  ngOnInit() {
  }

  redirectToInicio(){
    this.router.navigateByUrl("/inicio")
  }



  saveUser(){
    if(this.user.password==this.user.password2){
      this.us.createUser(this.user.username,this.user.password,this.user.rol).subscribe(
        (res) => {this.router.navigate(['/home'])
      console.log('funcó')},
        (err) => console.error(err)
      );
    }else{
      this.us.errorPass()
      this.router.navigateByUrl("/register")
    }

  }

}
