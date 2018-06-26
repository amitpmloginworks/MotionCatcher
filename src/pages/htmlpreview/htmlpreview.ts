import { Component } from '@angular/core';
import { ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser'
/**
 * Generated class for the HtmlpreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-htmlpreview',
  templateUrl: 'htmlpreview.html',
})
export class HtmlpreviewPage {
  htmledittexts
  htmledittext
  constructor(public santizer: DomSanitizer, public ViewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.htmledittext = this.navParams.get('html')
    this.htmledittexts = santizer.bypassSecurityTrustHtml(this.htmledittext)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlpreviewPage');
  }


  closepreview(){
    this.ViewCtrl.dismiss()
  }
  
}
