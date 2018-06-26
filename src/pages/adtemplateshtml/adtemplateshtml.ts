import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
import { ADtemplatesPage } from '../a-dtemplates/a-dtemplates';
/**
 * Generated class for the AdtemplateshtmlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adtemplateshtml',
  templateUrl: 'adtemplateshtml.html',
})
export class AdtemplateshtmlPage {
htmledittext
htmledittexts
  constructor(public santizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
this.htmledittext=this.navParams.get('Html')
        this.htmledittexts = santizer.bypassSecurityTrustHtml(this.htmledittext)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdtemplateshtmlPage');
  }

  navigateAdtemplateshtmlPage(){
  	this.navCtrl.setRoot(ADtemplatesPage)
  }

}
