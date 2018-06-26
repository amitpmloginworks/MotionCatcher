import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController ,AlertController} from 'ionic-angular';
import{GenericPage}from'../generic/generic'
import { YourAdPage } from '../your-ad/your-ad';
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates'
import{TextImageEditorPage}from'../text-image-editor/text-image-editor'
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'



/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
flags
chooseLibrarybox='Images'
Images
Iconspanel
Imagespanel
adId
adName

Adname
editboxad:boolean
addata

editAd

Adtemplate

flagsdata


phases
choosemode
choosepreview
  constructor(public alertCtrl:AlertController,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public security:SecurityProvider,public loadingCtrl:LoadingController) {


    this.choosepreview=this.navParams.get('choosepreview')
  
this.adId=this.navParams.get('adId')
this.Adname=this.navParams.get('adName')
this.editAd=this.navParams.get('editAd')
this.phases=this.navParams.get('phases')
this.Adtemplate=JSON.parse(localStorage['AdtemplateStore'])
this.flagsdata=this.Adtemplate
localStorage['adId']=this.adId

    this.flags=this.navParams.get('flags')
 
 let loading=this.loadingCtrl.create(
   {
    cssClass: 'transparent',
    spinner: 'hide',
    content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
    }
  )
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.getLibraryItems())
.subscribe(data=>{
loading.dismiss()
  console.log('library'+data)
 this.Iconspanel=data.lists[0].items
 
 this.Imagespanel=data.lists[1].items
})
  }

  editbox(id){

if(this.Adtemplate[id].json==null)  
{
  let toast = this.toastCtrl.create({
    message:'Ad is Empty',
    duration: 3000,
    position:'bottom'

  })
  toast.present()
}
else if(this.Adtemplate[id].json.jsonAd[0].phases[0].items[0].choosemode==1)
{

// /-------code----------/ 
let alert = this.alertCtrl.create({
  title: 'Create New Ad',
  inputs: [
    {
      name: 'AdName',
      placeholder: 'Enter your Adname'
    }
    
  ],
  buttons: [
    {
      text: 'Save',
      handler: data => {
       this.Adname=data.AdName
       this.navigatetoyourad(id)
      }
    }
  ]
});
alert.present();
}

else if(this.Adtemplate[id].json.jsonAd[0].phases[0].items[0].choosemode==2)
{
  let toast = this.toastCtrl.create({
    message:'Ad Can not be edited because this is Video ad',
    duration: 3000,
    position:'bottom'

  })
  toast.present()
}

else if(this.Adtemplate[id].json.jsonAd[0].phases[0].items[0].choosemode==3)
{
  let toast = this.toastCtrl.create({
    message:'Ad Can not be edited because this is HTML ad',
    duration: 3000,
    position:'bottom'

  })
  toast.present()
}
}

navigatetotextedit(id){
  this.editAd=true
this.navCtrl.setRoot(TextImageEditorPage,{'flags':this.flags,
  'adId':this.Adtemplate[id].adId,'adName':this.Adname,
'editAd':this.editAd,
'phases':this.phases,
'i':0
})
}


navigatetoyourad(id){
  this.choosemode=1
  localStorage['adId']=this.Adtemplate[id].adId
this.navCtrl.setRoot(YourAdPage,{'Adname':this.Adname,'choosemode':this.choosemode})
}

  navigatetogenricitem(name){
    this.navCtrl.setRoot(TextImageEditorPage,{'flags':this.flags,
    'getlibraryitems':name,
    'adId':this.adId,
  'editAd':this.editAd,
  'phases':this.phases,
  'adName':this.Adname,
  'choosepreview':this.choosepreview

})
  }

  adedit(){
    this.navCtrl.setRoot(TextImageEditorPage,{
      'addata':this.addata,'editAd':this.editAd, 
      'adId':this.adId,'phases':this.phases
    })
  }

segmentChanged(){
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  navigateToYourAD() {
    this.navCtrl.setRoot(YourAdPage);
    }

navigatetogenric(){
  this.navCtrl.setRoot(TextImageEditorPage,{'flags':this.flags,
  'adId':this.adId,'adName':this.Adname,
'editAd':this.editAd,
'phases':this.phases
})
}


  navigateTophaseTemplate(){
    this.navCtrl.setRoot(PhasetemplatesPage)
  }
   

  taptoedit(){

  }

}
