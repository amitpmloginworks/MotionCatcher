import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player'
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import { DistributeAdPage } from '../distribute-ad/distribute-ad'
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates'
/**
 * Generated class for the VideoplayeradPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videoplayerad',
  templateUrl: 'videoplayerad.html',
})
export class VideoplayeradPage {
  videodata
  phasetemplate
  constructor(public loadingCtrl: LoadingController, public security: SecurityProvider, public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer) {
    let loading = this.loadingCtrl.create({ content: 'wait..' })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getSingleAd())
      .subscribe(data => {
        loading.dismiss()
        this.videodata = data.json.jsonAd[0].phases[0].items[0].Video
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
    console.log('ionViewDidLoad VideoplayeradPage');
    
    

  }
  navigateToDistributeAD() {
     alert('currently we working on DistributeAds')
  }
  navigateToNewPhase(id) {
    this.navCtrl.setRoot(PhasetemplatesPage);
  }
  navigatephaseTemplate()
  {
   this.navCtrl.setRoot(PhasetemplatesPage); 
  }

}
