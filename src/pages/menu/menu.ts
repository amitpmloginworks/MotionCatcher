import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { DashboardPage } from "../dashboard/dashboard";
import { BillinginfoPage } from '../billinginfo/billinginfo'
import { AddvenuePage} from '../addvenue/addvenue';
import {AddscreensPage } from '../addscreens/addscreens';

import {WindowscreenPage } from '../windowscreen/windowscreen'
import {DistributeAdPage } from '../distribute-ad/distribute-ad';
import{LoginPage}from'../login/login'
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;
  rootPage: any =DashboardPage ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  this.pages = [
   { title: 'Dashboard', component:DashboardPage },
      { title: 'My Screens', component:WindowscreenPage },
        { title: 'My Ads', component:AddscreensPage },
        { title: 'Settings', component: BillinginfoPage},
         

      ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }


openPage(page){
this.nav.setRoot(page.component);
 }
 
  movetologin(){
    this.navCtrl.setRoot(LoginPage)
  }
}
