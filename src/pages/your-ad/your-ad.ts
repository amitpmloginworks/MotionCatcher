import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Alert,ToastController } from 'ionic-angular';
import { PhasetemplatesPage } from '../phasetemplates/phasetemplates'
import { DistributeAdPage } from '../distribute-ad/distribute-ad';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import { Geolocation } from '@ionic-native/geolocation'
import{TextImageEditorPage}from'../text-image-editor/text-image-editor'
/**
 * Generated class for the YourAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-your-ad',
  templateUrl: 'your-ad.html',
})
export class YourAdPage {
  imgsrc
  phasetemplate
  lat
  lng
  count=0
  imagedata
  textdata=[]
  textdata1=[]

  imageproperties=[] 
  imagehtmlproperties
  texthtmlproperties
  texthtmlproperties1
  



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





countforad=0


editAd:boolean

phases



phasesindex
multiplephasesad=[]
Adnameupadte
choosemode=0
choosepreview
normalperview
  constructor(public toastCtrl:ToastController,public geolocation: Geolocation,public security: SecurityProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {

 
        this.adName=this.navParams.get('Adname')
        this.choosemode=this.navParams.get('choosemode')
   

        if(this.choosemode==undefined)
        {    
          this.choosemode=0
      
        }
   
        this.geolocation.getCurrentPosition().then((resp) => {
      console.log('lat'+resp.coords.latitude)
      console.log('lng' + resp.coords.longitude)
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
    

    })
   
    let loading = this.loadingCtrl.create(
      {
        cssClass: 'transparent',
        spinner: 'hide',
        content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
      }
    )
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getSingleAd())
      .subscribe(data => {


        

        loading.dismiss()
        this.Adnameupadte=data.json.jsonAd[0].name
 this.phasesindex=data.json.jsonAd[0].phases.length-1

                      
        localStorage['updateadId']=data.adId
  
     console.log(data.json.jsonAd[0].phases[this.phasesindex].items[0].imageedit[0].imagehtmlproperties)
     console.log(data.json.jsonAd[0].phases[this.phasesindex].items[0].imageedit[0].texthtmlproperties) 
                
                    this.phases=data.json.jsonAd[0].phases
     

for(var i=0;i<data.json.jsonAd[0].phases.length;i++)
{


if(data.json.jsonAd[0].phases[i].flags[0].young==null)
{
this.boy='assets/img/AdTemplate/png/005-people-6.png'
} 
else{
this.boy=data.json.jsonAd[0].phases[i].flags[0].young
}
if(data.json.jsonAd[0].phases[i].flags[0].Sun==null)
{
this.Sun='assets/img/AdTemplate/png/005-people-6.png'
} 
else{
this.Sun=data.json.jsonAd[0].phases[i].flags[0].Sun
}

if(data.json.jsonAd[0].phases[i].flags[0].female==null)
{
this.female='assets/img/AdTemplate/png/014-people.png'
}
else{
this.female=data.json.jsonAd[0].phases[i].flags[0].female
}



if(data.json.jsonAd[0].phases[i].flags[0].kid==null)
{
this.baby='assets/img/AdTemplate/png/006-people-5.png'
}
else{
this.baby=data.json.jsonAd[0].phases[i].flags[0].kid
}


if(data.json.jsonAd[0].phases[i].flags[0].crying==null)
{
this.crying='assets/img/AdTemplate/png/008-sad.png'
} 
else{
this.crying=data.json.jsonAd[0].phases[i].flags[0].crying
}
if(data.json.jsonAd[0].phases[i].flags[0].generic==null)
{
this.generic='assets/img/AdTemplate/png/013-people-1.png'
}
else{

this.generic=data.json.jsonAd[0].phases[i].flags[0].generic

}



if(data.json.jsonAd[0].phases[i].flags[0].intense==null)
{
this.intense='assets/img/AdTemplate/png/010-emoticon.png'
}

else{

this.intense=data.json.jsonAd[0].phases[i].flags[0].intense
}




if(data.json.jsonAd[0].phases[i].flags[0].laugh==null)
{
this.laugh='assets/img/AdTemplate/png/007-feelings.png'
}
else{
this.laugh=data.json.jsonAd[0].phases[i].flags[0].laugh

}

if(data.json.jsonAd[0].phases[i].flags[0].male==null)
{
this.male='assets/img/AdTemplate/png/013-people-1.png'
} 
else{
this.male=data.json.jsonAd[0].phases[i].flags[0].male
}




if(data.json.jsonAd[0].phases[i].flags[0].adult==null)
{
this.man='assets/img/AdTemplate/png/005-people-6.png'
}
else{
this.man=data.json.jsonAd[0].phases[i].flags[0].adult

}


if(data.json.jsonAd[0].phases[i].flags[0].senior==null)
{
this.old='assets/img/AdTemplate/png/011-people-3.png'
}

else{
this.old=data.json.jsonAd[0].phases[i].flags[0].senior

}


if(data.json.jsonAd[0].phases[i].flags[0].pin==null)
{
this.pin='assets/img/AdTemplate/png/001-signs.png'
}
else{
this.pin=data.json.jsonAd[0].phases[i].flags[0].pin
}


if(data.json.jsonAd[0].phases[i].flags[0].sad==null)
{
this.sad='assets/img/AdTemplate/png/010-emoticon.png'
}
else{
this.sad=data.json.jsonAd[0].phases[i].flags[0].sad
}

if(data.json.jsonAd[0].phases[i].flags[0].smile==null)
{
this.smile='assets/img/AdTemplate/png/011-people-3.png'
}
else{
this.smile=data.json.jsonAd[0].phases[i].flags[0].smile
}

this.flagsdata.push({
'Sun':this.Sun
,'female':this.female,
'attentionSec':data.json.jsonAd[0].phases[i].flags[0].attentionSec,
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
'Adname':data.json.jsonAd[0].phases[i].name})

}




     this.imagedata=data.json.jsonAd[0].phases[this.phasesindex].items[0].imageedit[0].imagearray
     this.imagehtmlproperties=data.json.jsonAd[0].phases[this.phasesindex].items[0].imageedit[0].imagehtmlproperties
    this.texthtmlproperties=data.json.jsonAd[0].phases[this.phasesindex].items[0].imageedit[0].texthtmlproperties
     this.texthtmlproperties1=data.json.jsonAd[0].phases[this.phasesindex].items[0].imageedit[0].editboxad



     
  console.log(this.imagehtmlproperties)

     for(var i=0;i<this.imagedata.length;i++)
    {
this.imageproperties.push({'imagedata':this.imagedata[i],
'imagehtmlsetheight':this.imagehtmlproperties[i].setHeight,
'imagehtmlsetwidth':this.imagehtmlproperties[i].setWidth,
'imagehtmlsettop':this.imagehtmlproperties[i].settop,
'imagehtmlsetleft':this.imagehtmlproperties[i].setleft,
'imagehtmlsetrotate':this.imagehtmlproperties[i].setrotate,
'transform':this.imagehtmlproperties[i].transform

})
  
  console.log('---'+this.imagehtmlproperties[i].setHeight)
  console.log('---width'+this.imagehtmlproperties[i].setWidth)
   
  
}


for(var j=0;j<this.texthtmlproperties.length;j++)
{
this.textdata.push({
'textinput':this.texthtmlproperties[j].inputHtml,
'setextleft':this.texthtmlproperties[j].setextleft,
'settexttop':this.texthtmlproperties[j].settexttop,
'setheight':this.texthtmlproperties[j].setheight,
'setwidth':this.texthtmlproperties[j].setwidth,
'fontsize':this.texthtmlproperties[j].fontsize,
'settextrotate':this.texthtmlproperties[j].settextrotate,
'settextcolor':this.texthtmlproperties[j].settextcolor,
'fontfamily':this.texthtmlproperties[j].setfontfamily,
'textdecoration':this.texthtmlproperties[j].textdecoration,
'settextfontstyle':this.texthtmlproperties[j].settextfontstyle,
'settextfontweight':this.texthtmlproperties[j].settextfontweight,
'settexttalign':this.texthtmlproperties[j].settexttalign
})


}


for(var k=0;k<this.texthtmlproperties1.length;k++)
{



  this.textdata1.push({
    'textinput1':this.texthtmlproperties1[k].textinput,
    'setextleft':this.texthtmlproperties1[k].setextleft,
    'settexttop':this.texthtmlproperties1[k].settexttop,
    'setheight':this.texthtmlproperties1[k].setheight,
    'setwidth':this.texthtmlproperties1[k].setwidth,
    'fontsize':this.texthtmlproperties1[k].fontsize,
    'settextrotate':this.texthtmlproperties1[k].settextrotate,
    'settextcolor':this.texthtmlproperties1[k].settextcolor,
    'fontfamily':this.texthtmlproperties1[k].setfontfamily,
    'textdecoration':this.texthtmlproperties1[k].textdecoration,
    'settextfontstyle':this.texthtmlproperties1[k].settextfontstyle,
    'settextfontweight':this.texthtmlproperties1[k].settextfontweight,
    'settexttalign':this.texthtmlproperties1[k].settexttalign
    })
   

}
   })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad YourAdPage');
  }
  navigateToDistributeAD() {
    this.navCtrl.setRoot(DistributeAdPage,{lat:this.lat,lng:this.lng});
    
}
  navigateToNewPhase(id) {
 
    if(this.choosemode==0)
    {
    
      this.normalperview=1
      this.adName=this.Adnameupadte
     this.navCtrl.setRoot(PhasetemplatesPage,{phases:this.phases,
      normalperview:this.normalperview,adName:this.adName});
    }  
 else
 {
 
   this.choosepreview=1
 this.navCtrl.setRoot(PhasetemplatesPage,{
   adName:this.adName,phases:this.phases,choosepreview:this.choosepreview
 })
 }
}
navigatephaseTemplate()
{
   if(this.choosemode==0)
   {
    this.navCtrl.setRoot(PhasetemplatesPage);
   }  
else
{
this.navCtrl.setRoot(PhasetemplatesPage,{
  adName:this.adName
})
}

  }
navigatetoad(i)
{
if(this.choosemode==0)
{
  this.navCtrl.setRoot(TextImageEditorPage,{i:i,
    phases:this.phases,
    editAd:true,
    testupadte:1,
    adName:this.Adnameupadte
  })
}
 else{
this.navCtrl.setRoot(TextImageEditorPage,{i:i,
  phases:this.phases,
  editAd:true,
  testupadte:1,
  adName:this.adName
})

 }

}

}
