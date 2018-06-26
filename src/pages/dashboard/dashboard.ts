import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';

import {AddvenuePage} from '../addvenue/addvenue';
import {AddscreensPage} from '../addscreens/addscreens';
import {CreateAdPage} from '../create-ad/create-ad';
import { WelcomePage } from '../welcome/welcome';
import { Geolocation } from '@ionic-native/geolocation'
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
declare var google;
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  lat
  lng
  cities
  venues
  countries
  constructor(private nativePageTransitions: NativePageTransitions,public security:SecurityProvider,public geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('lat'+resp.coords.latitude)
      console.log('lng' + resp.coords.longitude)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    })

let loading=this.loadingCtrl.create(
  {
    cssClass: 'transparent',
    spinner: 'hide',
    content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
  }
)
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.DevicesInNetwork())
 .subscribe((data) => {
        loading.dismiss()
        console.log('cities'+data.cities)
        this.cities=data.cities.length
       this.venues=data.venues.length
       this.countries=data.countries.length
       })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  navigateToAddVenue() {
    this.navCtrl.setRoot(AddvenuePage, { lat: this.lat, lng: this.lng });
}

navigateToAddScreens(){
this.navCtrl.push(AddscreensPage);
}


  navigateToCreateAD() {
    localStorage['lat']=this.lat
    localStorage['lng']=this.lng
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
      androiddelay: 250,
     };
 
    this.nativePageTransitions.curl(options);
    this.navCtrl.setRoot(WelcomePage)

}
}
