import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
import{LoginPage}from'../login/login'


@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {
Email
  constructor(public security:SecurityProvider,public loadinCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpasswordPage');
  }

navigateToLogin(){
	let loading=this.loadinCtrl.create({content:'wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.fogetpassword(
this.Email
))
.subscribe(data=>{
	loading.dismiss()
	this.navCtrl.setRoot(LoginPage)
	})
}

}
