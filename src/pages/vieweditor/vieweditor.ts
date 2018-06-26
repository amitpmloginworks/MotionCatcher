import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
/**
 * Generated class for the VieweditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vieweditor',
  templateUrl: 'vieweditor.html',
})
export class VieweditorPage {
htmledittext
htmledittexts
  constructor(public santizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams,public ViewCtrl:ViewController) {
    this.htmledittext = this.navParams.get('hope1')
console.log(this.htmledittext)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VieweditorPage');
  }
   closepreview()
  {
    this.ViewCtrl.dismiss()
  }

}
