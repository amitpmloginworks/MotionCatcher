import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuPage } from '../menu/menu';
import{AddvenuePage}from'../addvenue/addvenue'
import { Geolocation } from '@ionic-native/geolocation'
/**
 * Generated class for the FinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html',
})
export class FinishPage {
lat
lng
  constructor(public geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  
  this.geolocation.getCurrentPosition().then((resp) => {
      console.log('lat'+resp.coords.latitude)
      console.log('lng' + resp.coords.longitude)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishPage');
  }

navigateToMenu(){

}

addscreen()
{
	this.navCtrl.setRoot(AddvenuePage,{lat:this.lat,lng:this.lng})
}

mainpage()
{
	this.navCtrl.setRoot(MenuPage)
}
}
