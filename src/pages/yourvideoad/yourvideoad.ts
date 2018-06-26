import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates'
import { DistributeAdPage } from '../distribute-ad/distribute-ad';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'

/**
 * Generated class for the YourvideoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yourvideoad',
  templateUrl: 'yourvideoad.html',
})
export class YourvideoadPage {
  colortext = null
  realtext = null
  fontfamily = null
  fontsize = null
  textdecorattion = null
  fontstyle = null
  fontweight = null
  textalign = null
  marginleft = null
  margintop = null
  textrotate = null
  imagefor = null
  heightpercent = null
  widthpercent = null
  scaletext = null
  boxrotate = null
  imageactive: boolean
  imageurl = null
  scaleimageparam = null
  imageedit = null
  imagewidth = null
  imageheight = null
  imagecenter = null
  imagetransformheight = null
  imagetransformwidth = null
  imagetransform = null
  imageboxactive: boolean
  textactive: boolean
  rotatebox
  
  constructor(public security: SecurityProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    let loading = this.loadingCtrl.create({ content: 'wait..' })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getSingleAd())
      .subscribe(data => {
        loading.dismiss()
 
             this.scaleimageparam = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].scaleimageparam
             this.imageurl = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].url
             this.imagewidth = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imagewidth
             this.imageheight = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imageheight
             this.imagecenter = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imagecenter
             this.imagetransform = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imagetransform
             this.imagetransformheight = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imagetransformheight
             this.imagetransformwidth = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imagetransformwidth
             this.rotatebox = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].rotatebox
             this.imagefor = data.json.jsonAd[0].phases[0].items[0].ImageVideo[0].imagefor
        
             var imagebox = document.getElementById('imagebox')
             imagebox.style.height = '189px'
             imagebox.style.marginTop = '53px'
             imagebox.style.width = '96%'
             imagebox.style.marginLeft = '6px'

             var imageedit = document.getElementById('imageedit')

             imageedit.style.width = this.imagewidth
             imageedit.style.height = this.imageheight
             imageedit.style.padding = this.imagecenter
          

             if (this.scaleimageparam == 1) {
      
               imageedit.style.transform = 'scale(1, 1.5)'
             }
             else {
               imageedit.style.transform = 'scale(1, 1)'
             }



             if (this.imagetransform != null) {
      
               imageedit.style.transform = this.imagetransform
               imageedit.style.height = this.imagetransformheight
               imageedit.style.width = this.imagewidth
             }


             var imagerotate = document.getElementById('imagebox')
             imagerotate.style.transform = this.boxrotate
             imagerotate.style.padding = '5px'
             if (this.rotatebox != null) {
               var imagebox = document.getElementById('imagebox')
               imagebox.style.transform = this.rotatebox
             }
             if (this.imagefor!=null)
             {
               var imageedit = document.getElementById('imageedit')
               imageedit.style.boxShadow = this.imagefor
             }

      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourvideoadPage');
  } navigateToDistributeAD() {
   
    alert('currently we working on DistributeAds')
  }
  navigatephaseTemplate() {
    this.navCtrl.setRoot(PhasetemplatesPage);
  }
  
}
