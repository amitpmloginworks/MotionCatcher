import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome'
import { ADtemplatesPage } from '../a-dtemplates/a-dtemplates';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
/**
 * Generated class for the CreateAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-ad',
  templateUrl: 'create-ad.html',
})
export class CreateAdPage {
  adName
  adId

  constructor(public toast: ToastController, public loadingCtrl: LoadingController, public security: SecurityProvider, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAdPage');
  }

  navigateToADTemplates() {
   
    let loading = this.loadingCtrl.create(
      {
        cssClass: 'transparent',
        spinner: 'hide',
        content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`
    })
    Observable.of(loading).flatMap(loading => loading.present())
    .flatMap(() => this.security.createad(this.adName))
      .subscribe(data => {
        loading.dismiss()
        console.log(JSON.stringify(data))
        if (data.status == 'ERROR') {
          let toastCtrl = this.toast.create({
            message: data.message,
            duration: 2000,
            position:'bottom'
          })
          toastCtrl.present()
          
        }
        else {
          console.log(data.adId)
          this.adId = data.adId
          localStorage['adId'] = this.adId
          localStorage['adName'] = this.adName
          this.navCtrl.setRoot(ADtemplatesPage, { 'adId': this.adId,'adName':this.adName});
        }

     })

  }


getflaglist(){
let loading=this.loadingCtrl.create({content:'Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.getAdsFlagsList())
.subscribe(data=>{
  loading.dismiss()
  console.log(data)
})
}


  navigateToWelcome() {
    this.navCtrl.setRoot(WelcomePage)
  }
}
