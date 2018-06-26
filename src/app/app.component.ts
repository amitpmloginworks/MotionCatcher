import { Component,ViewChild } from '@angular/core';
import { Nav, Platform ,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular'

import {LoginPage} from '../pages/login/login';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
@ViewChild(Nav)nav:Nav
  rootPage: any = LoginPage;
  loginstatus
  count=0
  constructor(public events: Events, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    //alert('width'+platform.width())
    //alert('height'+platform.height())

        platform.registerBackButtonAction(()=>{
    
           if(this.nav.canGoBack()){
             this.nav.pop()
           }
           else{

             let alert=this.alertCtrl.create({
                title: 'Exit?',
        message: 'Do you want to exit the app?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            alert=null
            }
          },
          {
            text: 'Exit',
            handler: () => {

              platform.exitApp();
            }
          }
        ]
             })
             alert.present()

           }
         })

    localStorage['width']=platform.width()
    localStorage['height']=platform.height()

      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  }
}

