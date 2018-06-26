import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SecurityProvider } from '../../providers/security/security'
import { Observable } from 'rxjs/Rx'
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates'
import { DistributeAdPage } from '../distribute-ad/distribute-ad'
import { Geolocation } from '@ionic-native/geolocation'
/**
 * Generated class for the YourhtmladPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yourhtmlad',
  templateUrl: 'yourhtmlad.html',
})
export class YourhtmladPage {
  htmledittext
  htmledittexts
  phasetemplate
  lat
  lng
  constructor(public geolocation: Geolocation,public santizer: DomSanitizer, public loadingCtrl: LoadingController, public security: SecurityProvider, public navCtrl: NavController, public navParams: NavParams) {
   
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('lat'+resp.coords.latitude)
      console.log('lng' + resp.coords.longitude)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    

    })



    let loading = this.loadingCtrl.create({ content: 'wait..' })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getSingleAd())
      .subscribe(data => {
        loading.dismiss()
        console.log('----' + data.json.jsonAd[0].phases[0].items[0].Html)
        this.htmledittext = data.json.jsonAd[0].phases[0].items[0].Html
        this.htmledittexts = santizer.bypassSecurityTrustHtml(this.htmledittext)
        this.phases()
        
      })
  }




phases()
{
let loading = this.loadingCtrl.create({ content: 'wait..' })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getAdsFlagsList())
      .subscribe(data => {
        loading.dismiss()
     console.log(data.phases)
       
       this.phasetemplate=data.phases
    

      })



}




  ionViewDidLoad() {
    console.log('ionViewDidLoad YourhtmladPage');
  }
  navigateToDistributeAD() {
    this.navCtrl.setRoot(DistributeAdPage,{lat:this.lat,lng:this.lng})
 
  }
  navigateToNewPhase() {
    this.navCtrl.setRoot(PhasetemplatesPage);
  }
  navigatephaseTemplate()
  {
   this.navCtrl.setRoot(PhasetemplatesPage);
  }

}
