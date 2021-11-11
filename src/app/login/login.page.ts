import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: any[]
  usuarioActivo: any[]

  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,
    private router:Router,private us:UserService,private http:HttpClient) { }


  ngOnInit() {

  }

  getUsers(){
    return this.http
    .get(this.us.API)
    .pipe(
      map((resp:any) => {
        return resp.data
      })
    )
  }


  Login(username,password){
    this.us.showLoading();
    this.getUsers().subscribe((res)=>{
      this.users=res
      var  i=0
    for(i;i<4;i++){
      if(username.value==this.users[i].username && password.value==this.users[i].password){
        this.usuarioActivo=[this.users[i].username,this.users[i].password,this.users[i].rol]
        localStorage.setItem('usuario',this.usuarioActivo[0])
        localStorage.setItem('password',this.usuarioActivo[1])
        localStorage.setItem('rol',this.usuarioActivo[2])
        this.router.navigateByUrl("/home")
      }else{
      }
    }
    })


  }

  redirectToPass(){
    this.router.navigateByUrl("/resetpass")
  }

  redirectToInicio(){
    this.router.navigateByUrl("/inicio")
  }


}
