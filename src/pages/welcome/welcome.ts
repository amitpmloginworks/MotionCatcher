import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu'
import {CreateAdPage } from '../create-ad/create-ad';
import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public videoStart:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.videoStart=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

playVideo(){
this.videoStart=1;
}

  navigateToCreateAD() {
    this.navCtrl.setRoot(CreateAdPage);
}
  navigateToDashboard()
  {
    this.navCtrl.setRoot(MenuPage)
  }

}
