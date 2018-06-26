import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ADtemplatesPage } from '../a-dtemplates/a-dtemplates';
/**
 * Generated class for the AdtemplatevideoshowpgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adtemplatevideoshowpg',
  templateUrl: 'adtemplatevideoshowpg.html',
})
export class AdtemplatevideoshowpgPage {
  videodata
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.videodata = this.navParams.get('Video')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdtemplatevideoshowpgPage');
  }

navigatetoADtemplatesPage(){
	this.navCtrl.setRoot(ADtemplatesPage)
}

}
