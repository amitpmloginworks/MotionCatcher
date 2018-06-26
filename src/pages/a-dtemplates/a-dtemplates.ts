import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { CreateAdPage } from '../create-ad/create-ad'
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import{ShowmyadPage}from'../showmyad/showmyad'
import{AdtemplateshtmlPage}from'../adtemplateshtml/adtemplateshtml';
import{AdtemplatevideoshowpgPage}from'../adtemplatevideoshowpg/adtemplatevideoshowpg'
import{YourAdPage}from'../your-ad/your-ad'
/**
 * Generated class for the ADtemplatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-dtemplates',
  templateUrl: 'a-dtemplates.html',
})
export class ADtemplatesPage {
  adId
  img
  defalutTemplate
  Adtemplate
  flagsdata=[]

Sun
female
attentionSec
baby
crying
generic

intense
laugh
male
man
old

pin
sad
smile

boy
adName
choosemode=0
Adname
  constructor(public alertCtrl:AlertController,public security: SecurityProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {

    this.adId = this.navParams.get('adId')
    this.adName=this.navParams.get('adName')
     let loading = this.loadingCtrl.create({
      cssClass: 'transparent',
        spinner: 'hide',
        content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`
    })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getNetworkADS())
      .subscribe(data => {
         loading.dismiss()
       this.defalutTemplate=data.lists[0].listName
        this.Adtemplate=data.lists[1].items
        console.log(this.Adtemplate)


      for(var i=0;i<this.Adtemplate.length;i++ )
      {
       
        if(this.Adtemplate[i].json==null)
        {
         
        this.flagsdata.push(
          {'Sun': 'assets/img/AdTemplate/png/003-summer.png'
          ,'female':'assets/img/AdTemplate/png/014-people.png',
          'attentionSec':3,
          'baby':'assets/img/AdTemplate/png/006-people-5.png',
          'boy':'assets/img/AdTemplate/png/005-people-6.png',
          'crying':'assets/img/AdTemplate/png/008-sad.png',
           'generic':'assets/img/AdTemplate/png/013-people-1.png',
           'intense':'assets/img/AdTemplate/png/010-emoticon.png',
           'laugh':'assets/img/AdTemplate/png/007-feelings.png',
           'male':'assets/img/AdTemplate/png/013-people-1.png',
           'man':'assets/img/AdTemplate/png/005-people-6.png',
           'old':'assets/img/AdTemplate/png/011-people-3.png',
           'pin':'assets/img/AdTemplate/png/001-signs.png',
           'sad':'assets/img/AdTemplate/png/010-emoticon.png',
           'smile':'assets/img/AdTemplate/png/011-people-3.png',
           'Adname':this.Adtemplate[i].name})
                
        }
        else{
if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].young==null)
{
this.boy='assets/img/AdTemplate/png/005-people-6.png'
} 
else{
  this.boy=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].young
}
if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].Sun==null)
{
this.Sun='assets/img/AdTemplate/png/005-people-6.png'
} 
else{
  this.Sun=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].Sun
}

if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].female==null)
{
this.female='assets/img/AdTemplate/png/014-people.png'
}
else{
  this.female=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].female
}


if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].kid==null)
{
this.baby='assets/img/AdTemplate/png/006-people-5.png'
}
else{
  this.baby=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].kid
}


if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].crying==null)
{
this.crying='assets/img/AdTemplate/png/008-sad.png'
} 
else{
this.crying=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].crying
}
if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].generic==null)
{
this.generic='assets/img/AdTemplate/png/013-people-1.png'
}
else{

this.generic=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].generic

}



if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].intense==null)
{
this.intense='assets/img/AdTemplate/png/010-emoticon.png'
}

else{

  this.intense=this.Adtemplate[i].json.jsonAd[0].phases[0].flags.intense
}




if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].laugh==null)
{
this.laugh='assets/img/AdTemplate/png/007-feelings.png'
}
else{
this.laugh=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].laugh

}

if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].male==null)
{
this.male='assets/img/AdTemplate/png/013-people-1.png'
} 
else{
  this.male=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].male
}


if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].adult==null)
{
this.man='assets/img/AdTemplate/png/005-people-6.png'
}
else{
  this.man=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].adult

}


if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].senior==null)
{
this.old='assets/img/AdTemplate/png/011-people-3.png'
}

else{
  this.old=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].senior
 
}


if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].pin==null)
{
this.pin='assets/img/AdTemplate/png/001-signs.png'
}
else{
  this.pin=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].pin
}


if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].sad==null)
{
this.sad='assets/img/AdTemplate/png/010-emoticon.png'
}
else{
  this.sad=this.Adtemplate[i].json.jsonAd[0].phases.flags.sad
}

if(this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].smile==null)
{
this.smile='assets/img/AdTemplate/png/011-people-3.png'
}
else{
  this.smile=this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].smile
}


this.flagsdata.push({
  'Sun':this.Sun
 ,'female':this.female,
  'attentionSec':this.Adtemplate[i].json.jsonAd[0].phases[0].flags[0].attentionSec,
  'baby':this.baby,
  'boy':this.boy,
  'crying':this.crying,
  'generic':this.generic,
  'intense':this.intense,
  'laugh':this.laugh,
 'male':this.male,
  'man':this.man,
  'old':this.old,
  'pin':this.pin,
  'sad':this.sad,
  'smile':this.smile,
  'Adname':this.Adtemplate[i].name})


 }
       }     
      })
  }

  libraryItems() {
    let loading = this.loadingCtrl.create({
      content:'wait..'
    })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.libraryItems(this.adId))
      .subscribe(data => {
        console.log('HI'+JSON.stringify(data))
        loading.dismiss()
      })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ADtemplatesPage');
   
  }

  navnavigateToPhaseTemplates()
  {
    let toast = this.toastCtrl.create({
      message:'Choose the Templates First',
      duration: 3000,
      position:'bottom'

    })
    toast.present()
  }

navigateToPhaseTemplates(id){
 
  var box ='box'+ id
localStorage['AdtemplateStore']=JSON.stringify(this.Adtemplate)
  var x = document.getElementById(box)
  x.style.backgroundColor = '#2d2f38'
  setTimeout(() => {
    this.navCtrl.setRoot(PhasetemplatesPage,{'adId':this.adId,
    'adName':this.adName,
  'Adtemplate':this.Adtemplate});
  },1000)

}

  navigateToCreateAdPage()
  {
   this.navCtrl.setRoot(CreateAdPage)   
  }


  navigatetoad(i){
  
      if(this.Adtemplate[i].json==null)
      {
        let toast = this.toastCtrl.create({
      message:'Ad is Empty',
      duration: 3000,
      position:'bottom'

    })
    toast.present()
      }
      else{
    
        if(this.Adtemplate[i].json.jsonAd[0].phases[0].items[0].choosemode==1)
        {
       
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
       this.navigatetoyourad(i)
      }
    }
  ]
});
alert.present();
}
        else if(this.Adtemplate[i].json.jsonAd[0].phases[0].items[0].choosemode==3)
        {
        this.navCtrl.setRoot(AdtemplateshtmlPage,{Html:this.Adtemplate[i].json.jsonAd[0].phases[0].items[0].Html})
        }
        else if(this.Adtemplate[i].json.jsonAd[0].phases[0].items[0].choosemode==2)
        {
        this.navCtrl.setRoot(AdtemplatevideoshowpgPage,{Video:this.Adtemplate[i].json.jsonAd[0].phases[0].items[0].Video})
        }
  }

  }



  navigatetoyourad(id){

  this.choosemode=1
  localStorage['adId']=this.Adtemplate[id].adId
this.navCtrl.setRoot(YourAdPage,{'Adname':this.Adname,'choosemode':this.choosemode})

}

}
