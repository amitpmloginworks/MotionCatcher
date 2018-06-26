import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController ,LoadingController} from 'ionic-angular';
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates'
import {LibraryPage } from '../library/library';
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
/**
 * Generated class for the NewphasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newphase',
  templateUrl: 'newphase.html',
})
export class NewphasePage {

  bothoff:boolean
  ladyoff: boolean
  peopleoff: boolean
  kidoff: boolean
  boyoff: boolean
  manoff: boolean
  oldoff: boolean
  smileyoff: boolean
  laughingoff: boolean
  sadoff: boolean
  moodoff: boolean
  angeroff: boolean
  umbrellaoff: boolean
  sunoff: boolean
  pinoff: boolean
  eyeoff: boolean
  activeoff: boolean
  genericactive: boolean
  phasename
  newphasenumber=null
  flags=[]
  generic=null
  female=null
  male=null
  baby=null
  boy=null
  man=null
  old=null
  smile=null
  laugh=null
  crying=null
  sad=null
  intense=null
  umbrella=null
  Sun=null
  pin=null
countmale=0
countfemale=0
countkid=0
countyoung=0
countadult=0
countsenior=0
countemotions=0
countgeneric=0

imgmaleoff
imgmaleon

imgfemaleoff
imgfemaleon

imgkidoff
imgkidon

imgyoungoff
imgyoungon

imgadultoff
imgadulton

imgsenioroff
imgsenioron

imgemotionsoff
imgemotionson
adId
adName
Adtemplate

phases
choosepreview
  constructor(public security:SecurityProvider,public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams,public loadinCtrl:LoadingController) {
   this.phases=this.navParams.get('phases')
   this.choosepreview=this.navParams.get('choosepreview')
    this.bothoff = true
    this.ladyoff = true
    this.peopleoff = true
    this.kidoff = true
    this.boyoff = true
    this.manoff = true
    this.oldoff = true
    this.smileyoff = true
    this.laughingoff = true
    this.sadoff = true
    this.moodoff = true
    this.angeroff = true
    this.umbrellaoff = true
    this.sunoff = true
    this.pinoff = true
    this.eyeoff = true
    this.activeoff = false
    this.genericactive = true
this.adName=this.navParams.get("adName")
    this.adId=this.navParams.get("adId")
    this.Adtemplate=this.navParams.get('Adtemplate')
        let loading=this.loadinCtrl.create(
          {
            cssClass: 'transparent',
            spinner: 'hide',
            content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
        }
        )
Observable.of(loading).flatMap(
  loading=>loading.present()
)
.flatMap(()=>this.security.flaglist())
.subscribe(data=>{
  
  loading.dismiss()
console.log(data.defaultAttention)
  
this.newphasenumber=data.defaultAttention
this.imgmaleoff=data.flags[0].flags[0].img_off
this.imgmaleon=data.flags[0].flags[0].img_on
  
this.imgfemaleoff=data.flags[0].flags[1].img_off
this.imgfemaleon=data.flags[0].flags[1].img_on

this.imgkidoff=data.flags[1].flags[0].img_off
this.imgkidon=data.flags[1].flags[0].img_on

this.imgyoungoff=data.flags[1].flags[1].img_off
this.imgyoungon=data.flags[1].flags[1].img_on

this.imgadultoff=data.flags[1].flags[2].img_off
this.imgadulton=data.flags[1].flags[2].img_on

this.imgsenioroff=data.flags[1].flags[3].img_off
this.imgsenioron=data.flags[1].flags[3].img_on

this.imgemotionsoff=data.flags[2].flags[0].img_off
this.imgemotionson=data.flags[2].flags[0].img_on

  })

  }


  select(id)
  {
    
    if (id == 1)
    {

      if (this.genericactive == true) {
       this.countgeneric++
        if(this.countgeneric%2!=0)
        {
        this.bothoff = false
        this.generic='generic'
        this.activeoff = true
        }
        else{
        this.bothoff = true
        this.generic=null 

      this.activeoff = false
        }

        
        
       
      }
      else {
        let toast = this.toastCtrl.create({
          message: 'You can not choose after selecting Non-Genric',
          duration: 3000,
          position:'bottom'
        })
        toast.present()
      }

    }
    else {

      if (this.activeoff == true)
      {
         let toast = this.toastCtrl.create({
          message: 'You can not choose after selecting Genric',
          duration: 3000,
          position: 'bottom'
        })
        toast.present()
      }
      else if (id == 2) {
           this.countfemale++
       if(this.countfemale%2!=0)
       {
        this.female=this.imgfemaleon
        this.ladyoff=false
         this.genericactive = false
        }

        else{
        this.female=null
        this.ladyoff=true
        this.genericactive = true
        }
        this.activeoff = false
       
        
      }
      else if (id == 3) {
        this.countmale++
        if(this.countmale%2!=0)
       {
 
        this.male=this.imgmaleon
        this.peopleoff = false
        this.genericactive = false
      
       }

    else{
          this.male=null
          this.peopleoff = true
          this.genericactive = true
        }

        this.activeoff = false

       }
      else if (id == 4) {
       this.countkid++
       if(this.countkid%2!=0)
       {
          this.baby=this.imgkidon
          this.kidoff = false
          this.genericactive = false         
       }

       else{
          this.baby=null
          this.kidoff = true
           this.genericactive = true
       }

         this.activeoff = false
        
       }
      else if (id == 5) {
     
        this.countyoung++
        if(this.countyoung%2!=0)
        {
        this.boy=this.imgyoungon
        this.boyoff = false
        this.genericactive = false
        }
       else{
           this.boy=null
           this.boyoff = true
           this.genericactive = true
          }    
        this.activeoff = false
        
      }
       else if (id == 6) {
       this.countadult++
      if(this.countadult%2!=0)
       {
        this.man=this.imgadulton
        this.manoff = false
        this.genericactive = false
       }
       else
      {
  
        this.man=null
        this.manoff = true
        this.genericactive = true
      }

        this.activeoff = false
      }
      else if (id == 7) {
       this.countsenior++

        if(this.countsenior%2!=0)
       {
        this.old=this.imgsenioron
        this.oldoff = false
        this.genericactive = false
        }
      else
      {
        this.old=null
        this.oldoff = true
         this.genericactive = true
      }
        this.activeoff = false
        
      }
      else if (id == 8) {
     this.countemotions++

     if(this.countemotions%2!=0)
     {
     this.smile=this.imgemotionson
     this.smileyoff = false
      this.genericactive = false
      }
      else{
     this.smile=null
     this.smileyoff = true
      this.genericactive = true
      }
        this.activeoff = false
        
        
      }
      else if (id == 9) {

   this.laugh='laugh'
        this.laughingoff = false
        this.activeoff = false
        this.genericactive = false

      }
      else if (id == 10) {
this.crying='crying'

        this.sadoff = false
        this.activeoff = false
        this.genericactive = false

      }
      else if (id == 11) {
this.sad='sad'

        this.moodoff = false
        this.activeoff = false
        this.genericactive = false

      }
      else if (id == 12) {
this.intense='intense'

        this.angeroff = false
        this.activeoff = false
        this.genericactive = false

      }
      else if (id == 13) {
this.umbrella='umbrella'

        this.umbrellaoff = false
        this.activeoff = false
        this.genericactive = false

      }
      else if (id == 14) {

this.Sun='Sun'
        this.sunoff = false
        this.activeoff = false
        this.genericactive = false

      }

      else if (id == 15) {

this.pin='pin'
        this.pinoff = false
        this.activeoff = false
        this.genericactive = false

      }
      else if (id == 16) {


        this.eyeoff = false
        this.activeoff = false
        this.genericactive = false

      }






    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewphasePage');
  }
  
  navigateToPhaseTemplate(){
    this.navCtrl.setRoot(PhasetemplatesPage)
  }

  navigateToLibrary() {
    this.flags.push({'generic':this.generic,'female':this.female,
'male':this.male,'kid':this.baby,'young':this.boy,'adult':this.man,
'senior':this.old,'smile':this.smile,'laugh':this.laugh,
'crying':this.crying,'sad':this.sad,'intense':this.umbrella,'Sun':this.Sun,'pin':this.pin,'attentionSec':this.newphasenumber})


localStorage['phasename']=this.phasename
 
    localStorage['flags']=this.flags
    localStorage['attentionSec']=this.newphasenumber
    this.navCtrl.setRoot(LibraryPage,{'flags':this.flags,
    'adId':this.adId,
    'adName':this.adName,
  'Adtemplate':this.Adtemplate,
'phases':this.phases,
'choosepreview':this.choosepreview
});
 
}
}
