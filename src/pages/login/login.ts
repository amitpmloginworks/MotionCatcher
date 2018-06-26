import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { BillinginfoPage} from '../billinginfo/billinginfo'
import {Welcome2Page} from '../welcome2/welcome2';
import {CreateaccountPage} from '../createaccount/createaccount';
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword'
import { DashboardPage } from '../dashboard/dashboard'
import { MenuPage } from '../menu/menu'
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';
import { Events } from 'ionic-angular'
import 'rxjs/add/observable/forkJoin';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Http, Response, RequestOptions, Headers } from '@angular/http'

declare var jsSHA
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
email
pwHash
  qrcode
  token
  loginstatus
  data1
  data2
  isBusy
  loadingMotion
  loadingcontrol:boolean
  myDataArray = ['1', '2', '3'];
  loadProgress=60
  constructor(private nativePageTransitions: NativePageTransitions,public http: Http, public events: Events, private device: Device, private uniqueDeviceID: UniqueDeviceID, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public security: SecurityProvider) {

  
this.email=localStorage['email']
this.pwHash=localStorage['password']
    var tok = localStorage['token']
    this.loadingMotion = false

  }
 


  show() {
    this.loadingMotion = true
  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  hope() {

    this.email
    var check = this.email.substring(0, 1)
    if (check == check.toUpperCase()) {
      const toast = this.toastCtrl.create({
        message: 'Email First letter can not be uppercase',
        duration: 2000,
        position: 'bottom'

      })
      toast.present()
    }

    else {
localStorage['email']=this.email
localStorage['password']=this.pwHash
    
      var user = this.email
      var pwd = this.pwHash
      var iterations = 100
      var pwdHashed = this.hashIterative(pwd, user, iterations)

       this.loadingcontrol=true
     let loading=this.loadingcontrol
      Observable.of(loading)
        .flatMap(() => this.security.hopetest(user, pwdHashed))
        .subscribe(data => {
          console.log(data)
          if (data.error) {
            this.loadingcontrol=false
            const toast = this.toastCtrl.create({
              message: data.error,
              duration: 2000,
              position: 'bottom'
            });
            toast.present()
          }
          else {
                  this.loadingcontrol=false
            console.log(data.bearer)
            this.token = data.bearer
            localStorage['token'] = this.token;
            const toast = this.toastCtrl.create({
              message: 'Login successfully',
              duration: 1000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              let options: NativeTransitionOptions = {
                direction: 'left',
                duration: 400,
                slowdownfactor: -1,
                iosdelay: 50,
                androiddelay: 250,
               };
           
              this.nativePageTransitions.slide(options);
              this.navCtrl.push(MenuPage);
            });

            toast.present();
          }
        })
    }
  }
  hashIterative(password, salt, iterations) {
    var hash = this.hashOnce(btoa(salt) + "$" + password)

    for (var i = 1; i < iterations; i++) {
      hash = this.hashOnce(hash)
    }

    return hash;
  }
  hashOnce(text) {
    var shaObj = new jsSHA("SHA-512", "TEXT");

    shaObj.update(text);

    return shaObj.getHash("B64");
  }



  navigateToWelcome (){
    this.email
    var check = this.email.substring(0, 1)
    if (check == check.toUpperCase())
    {
      const toast = this.toastCtrl.create({
        message: 'Email First letter can not be uppercase',
        duration: 2000,
        position:'bottom'

      })
      toast.present()
    }
    else {
      let loading = this.loadingCtrl.create({ content: 'Wait..' })
      Observable.of(loading).flatMap(loading => loading.present())
        .flatMap(() => this.security.login(this.email, this.pwHash))
        .subscribe(data => {
          if (data.error) {
            loading.dismiss()
            const toast = this.toastCtrl.create({
              message: data.error,
              duration: 2000,
              position: 'bottom'
            });
            toast.present()

          }
          else {      
            console.log(data.bearer)
            this.token = data.bearer
            localStorage['token'] = JSON.stringify(this.token);
            const toast = this.toastCtrl.create({
              message: 'Login successfully',
              duration: 1000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              let options: NativeTransitionOptions = {
                direction: 'left',
                duration: 400,
                slowdownfactor: -1,
                iosdelay: 50
               };
           
              this.nativePageTransitions.slide(options);
              this.navCtrl.setRoot(MenuPage);
            });

            toast.present();
          }

        })

    }
  }


  navigateToCreateAccount() {
    this.navCtrl.push(CreateaccountPage);
}

  navigatetoForgetPassword() {
    this.navCtrl.push(ForgetpasswordPage)

}

}
