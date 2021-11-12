import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface User {
  username: string;
  password: string;
  password2: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {


  API='assets/files/user.json'
  API2='assets/files/user2.json'

  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,
    private router:Router,private http:HttpClient) { }

  showLoading(){
    this.loadingCtrl.create({
      message:"Cargando..."
   }).then((loading)=> {loading.present();
    setTimeout(()=>{
     loading.dismiss();
    },400)
  })
}

async errorLogin(){
  const alert=await this.alertCtrl.create({
    header:'Error',
    subHeader:'',
    message:'Correo o Contraseña invalida',
    buttons:['Aceptar']
  });

  await alert.present();
  let result= await alert.onDidDismiss();
}
async resetSent(){
  const alert = await this.alertCtrl.create({
    header:'Enviado',
    subHeader:'',
    message:'Se ha enviado reestablecer contraseña',
    buttons:['Aceptar']
  });
  await alert.present();
  let result=await alert.onDidDismiss();
}

async resetError(){
  const alert = await this.alertCtrl.create({
    header:'Error',
    subHeader:'',
    message:'Campo no valido',
    buttons:['Aceptar']
  });
  await alert.present();
  let result=await alert.onDidDismiss();
}
async errorPass(){
  const alert=await this.alertCtrl.create({
    header:'Error',
    subHeader:'',
    message:'Contraseñas invalidas',
    buttons:['Aceptar']
  });

  await alert.present();
  let result= await alert.onDidDismiss();
}



getUsers(){
  return this.http
  .get(this.API)
  .pipe(
    map((resp:any) => {
      return resp.data
    })
  )
}

createUser(username: string,password:string,rol:string){
  return  this.http.post(this.API2,{username,password,rol})
}

}
