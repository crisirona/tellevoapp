import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage implements OnInit {

  constructor(private alertCtrl:AlertController,private loadingCtrl:LoadingController,
    private router:Router,private us:UserService) { }

  ngOnInit() {
  }



  resetPass(username){
    if(username==""){
      this.us.resetError();
    }else{
      this.us.showLoading();
      this.us.resetSent();
    }
  }

  redirectToLogin(){
    this.router.navigateByUrl("/login")
  }
}
