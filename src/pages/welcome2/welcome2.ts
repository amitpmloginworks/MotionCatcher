import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{MenuPage}from'../menu/menu'
/**
 * Generated class for the Welcome2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome2',
  templateUrl: 'welcome2.html',
})
export class Welcome2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome2Page');
  }
movetodashboard(){

this.navCtrl.push(MenuPage)
}
}
