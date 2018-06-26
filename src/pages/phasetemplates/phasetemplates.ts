import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';
import { ADtemplatesPage } from '../a-dtemplates/a-dtemplates'
import {NewphasePage} from '../newphase/newphase';
import{Observable}from'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import{LibraryPage}from'../library/library'
/**
 * Generated class for the PhasetemplatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phasetemplates',
  templateUrl: 'phasetemplates.html',
})
export class PhasetemplatesPage {
phasetemplate
count=0
adId
adName
PhasetemplatesPage
Adtemplate

phases
choosepreview
  constructor(public security:SecurityProvider,public loadingCtrl:LoadingController,public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {

    this.phases=this.navParams.get('phases')
    this.adId=this.navParams.get("adId")
  this.adName=this.navParams.get("adName")
  this.choosepreview=this.navParams.get("choosepreview")
  this.Adtemplate=this.navParams.get('Adtemplate')

  let loading = this.loadingCtrl.create(
    { 
      cssClass: 'transparent',
      spinner: 'hide',
      content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
     }
  )
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getAdsFlagsList())
      .subscribe(data => {
        loading.dismiss()
     console.log(data.phases)
       
       this.phasetemplate=data.phases
    

      })




  }
  tapon(i,j){


this.count++
if(this.count%2!=0)
{
 var pos=(<HTMLInputElement>document.getElementById('a_'+i+'_'+j)).src=this.phasetemplate[j].flags[i].img_on
}
else{

   var pos=(<HTMLInputElement>document.getElementById('a_'+i+'_'+j)).src=this.phasetemplate[j].flags[i].img_off
}

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PhasetemplatesPage');
  }

  navigateToNewPhase(id) {
   
    var box = 'box' + id
    var x = document.getElementById(box)
    x.style.backgroundColor = '#2d2f38'
    setTimeout(() => {
      this.navCtrl.setRoot(NewphasePage,{'phases':this.phases,
      'adId':this.adId,
      'adName':this.adName,
      'Adtemplate':this.Adtemplate,
        'choosepreview':this.choosepreview
    
    });
    }, 1000)

   


  }
  navnavigateToNewPhase() {
    let toast = this.toastCtrl.create({
      message: 'Please Choose Template First',
      duration: 3000,
      position:'bottom'
    })
    toast.present()
  }
  navigateToAdTemplate() {
    this.navCtrl.setRoot(ADtemplatesPage)
  }

  navigatetolibrary(j) {  
    localStorage['phasename']=this.phasetemplate[j].name;
    this.navCtrl.setRoot(LibraryPage,{'flags':this.phasetemplate[j].flags,
    'adId':this.adId,
    'adName':this.adName,
  'Adtemplate':this.Adtemplate,
'phases':this.phases,
'choosepreview':this.choosepreview
});
  }
}
