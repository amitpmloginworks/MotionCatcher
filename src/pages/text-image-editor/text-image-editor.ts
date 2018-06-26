import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController ,ToastController,LoadingController,ModalController,MenuController, Alert} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { File, FileSystem } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import{VieweditorPage}from'../vieweditor/vieweditor'
import * as html2canvas from 'html2canvas';
import{YourAdPage}from'../your-ad/your-ad';
import { NgZone } from '@angular/core';
import { VideoplayeradPage } from '../videoplayerad/videoplayerad'
import { HtmlpreviewPage } from '../htmlpreview/htmlpreview'
import { YourhtmladPage } from '../yourhtmlad/yourhtmlad'
import { LibraryPage } from '../library/library'
import * as fs from "file-system"

/**
 * Generated class for the TextImageEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-image-editor',
  templateUrl: 'text-image-editor.html',
})
export class TextImageEditorPage {
	flagactive=0
imagedata=[]
imagedata1=[]
textdata=[]
elementsdata=[]
items=[]
phases=[]
jsonAd=[]
imageproperties=[]
imagehtmlproperties=[]
texthtmlproperties=[]
inputdata='.'
inputdata1
inputdata2
inputdata3
inputdata4
inputdata5
in1:boolean
in2:boolean
in3:boolean
in4:boolean


lastelement
lastelementdata
count=0

imgsrc=null
imageid
imageid1
imageid2
widthchange:boolean
heightchange:boolean
editbox:boolean
textadd:boolean
scalechange:boolean
rotatechange:boolean
imagestyleactive1:boolean
textstyleactive1:boolean
textrotatechange:boolean
scalerotatechange:boolean
textstyleactive:boolean
colorboard:boolean
boxactive:boolean
videoactive:boolean
ImageVideoContent:boolean
htmlactive:boolean
flagtext:boolean
widthchanging
 loadProgress = 0
widthadjustment=100
heightadjustment=100
rotateadjustment=90
rotatetextadjustment=90
scaletextadjustment=20
scaleadjustment=97
textpositiony=200
textpositionx = 100
count1=0
count2=0
count3=0
count4=0
count5=0
count6=0
count7=0
count8=0
count9=0
textrotatecount=0
imagerotatecount=0

widthcount=0
heightcount=0
addbuttoncount=0
countscaleimg1=0
countscaleimg2=0
countscaleimg3=0
countscaleimg4=0
countscaleimg5=0
texrotatecounts=0
scalecount=0
textinput='hi'
users
countinput=0
flag
flag1:boolean
toppos=0
counttap=0
getmyeditid
rotateid
scaleid
textcolor
imageafterupload
imageshow
flags
videodata
videoplay
videosrc
savedhtml
leftpos
moveoncount=0
values = '';
getlibraryitems
chooseeditingmode=0
addata
loadingad
flagad=0
adeditbox:boolean

editboxad=[]
textadeditboxcontent=[]

texthtmlpropertiesad
adId
adName
editAd
edidadactive

edidadactive1
editflags
editflagsname
editAdname

textadeditbox
textdataeditfeild
textid

textactive:boolean


settexttop
     setextleft
      setheight
      setwidth
  fontsize
     settextrotate
      settextcolor
      setfontfamily
      settextdecoration
     settextfontstyle
     setfontweight
      settexttalign

      phasesfromnewphase
    
       phaseid
       choosemodescreen
      testupadte=0
         
      choosepreview=0
constructor(public file:File,public menu:MenuController,public _zone: NgZone,public modalcontroller:ModalController,public loadingCtrl:LoadingController,public filetransfer: FileTransfer, public security: SecurityProvider,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public camera: Camera,public actionsheetCtrl:ActionSheetController) {

  this.choosepreview=this.navParams.get('choosepreview')
  this.testupadte=this.navParams.get('testupadte')
 this.phaseid=this.navParams.get('i')
   this.chooseeditingmode=this.navParams.get('choosemodescreen')
  this.phases=this.navParams.get('phases')
if(this.phases!=undefined)
{

  
 
  localStorage['adId']=localStorage['updateadId']

  this.adId=localStorage['adId'] 

}
else if(this.chooseeditingmode==1)
{

  this.phases=[]
  this.adId=localStorage['updateadId']
  this.phaseid=0
}
else{

  this.phases=[]
  this.adId=this.navParams.get('adId')
  localStorage['adId']=this.adId

}


  this.textactive=false
this.edidadactive1=false

this.adName=this.navParams.get('adName')

if(this.choosepreview=1)
{
  localStorage['adName']=this.adName
}


this.editAd=this.navParams.get('editAd')
if(this.editAd==true)
{
 
  let loading=this.loadingCtrl.create(
    {
      cssClass: 'transparent',
      spinner: 'hide',
      content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
      }
  )
 Observable.of(loading).flatMap(loading=>loading.present())
       .flatMap(() => this.security.getSingleAdedit(this.adId))
      .subscribe(data=>{
        loading.dismiss()
        console.log('--'+data)
             this.addata=data
              this.edidadactive=true 
              this.adeditactive()

              this.phases=data.json.jsonAd[0].phases  
              this.editflags=data.json.jsonAd[0].phases[this.phaseid].flags
              this.editflagsname=data.json.jsonAd[0].phases[this.phaseid].name
              
                this.editAdname=this.adName
              

              localStorage['adName']=this.editAdname
    
           
            })



}




  this.adeditbox=false




this.flagtext=false
this.menu.enable(false)
this.textinput='hi'
this.textadd=false
 this.editbox=false

this.widthchange=false
this.heightchange=false

this.imagestyleactive1=true
  this.textrotatechange=false
  this.scalerotatechange=false
  this.textstyleactive=false
  this.colorboard=false
  this.boxactive=false
  this.videoactive=false
  this.ImageVideoContent=true
  this.htmlactive=false

  
this.flags=this.navParams.get('flags')

this.getlibraryitems=this.navParams.get('getlibraryitems')


if(this.getlibraryitems!=undefined)
{
  this.imagedata.push(this.getlibraryitems)
}
}
  onKey(id) { 

    var val2=(<HTMLInputElement>document.getElementById('textcolor_'+id)).value
    console.log(val2.length)
var changewidth=document.getElementById(id+'_b')
var changeinputwidth=document.getElementById('textcolor_'+id)

changewidth.style.width=(2*val2.length+10+this.scaletextadjustment)+'%'
console.log('ftextsize'+this.scaletextadjustment)
  }


   textsmall(){
  this.count6++
  if(this.count6%2!=0)
  {
      var x=document.getElementById('textcolor_'+this.getmyeditid)
      x.style.fontSize = "xx-small";
    
  }
  else{
   var x=document.getElementById('textcolor_'+this.getmyeditid)
      x.style.fontSize = "1.4rem"; 
   
  }
  }

  imageactive()
  {
  for(var x=0;x<this.imagedata.length;x++)
  {
    
   if(x==this.imagedata.length-1){
    
   
   
   
    var e=(<HTMLInputElement>document.getElementById(this.imagedata.length-1+'_e')).src="assets/img/editorimage/move.png"
    var f=(<HTMLInputElement>document.getElementById(this.imagedata.length-1+'_f')).src="assets/img/editorimage/rotate.png"
    var g=(<HTMLInputElement>document.getElementById(this.imagedata.length-1+'_g')).src="assets/img/editorimage/recycle-bin.png"
    var h=(<HTMLInputElement>document.getElementById(this.imagedata.length-1+'_h')).src="assets/img/editorimage/001-hand.png"
  
  
  
  }
   else{
    
    var e=(<HTMLInputElement>document.getElementById(x+'_e')).src=""
    var f=(<HTMLInputElement>document.getElementById(x+'_f')).src=""
    var g=(<HTMLInputElement>document.getElementById(x+'_g')).src=""
    var h=(<HTMLInputElement>document.getElementById(x+'_h')).src=""

   }
   
  } 

  }



  adeditactive(){
    for(var i=0;i<this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagearray.length;i++)
    {
    
    this.imagedata.push(this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagearray[i])
    
    }
    
    this.loadingad=this.loadingCtrl.create({
      content:'Ad is Loading..'
    })
    this.loadingad.present();
    setTimeout(() => {
      this.loadingad.dismiss();
    this.taponhope()
    }, 5000);
    this.adeditbox=true 
  }




taponhope(){

for(var i=0;i<this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties.length;i++)
{
var editheight=document.getElementById(i+'_x')
editheight.style.height=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties[i].setHeight+'px'

var editwidth=document.getElementById(i+'_z')
editwidth.style.width=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties[i].setWidth+'px'

var edittop=document.getElementById(i+'_z')
 edittop.style.top=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties[i].settop

var editleft=document.getElementById(i+'_z')
editleft.style.left=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties[i].setleft



var editrotate=document.getElementById(i+'_x')
editrotate.style.transform=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties[i].setrotate

var transform=document.getElementById(i+'_z')
transform.style.transform=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].imagehtmlproperties[i].transform

}
this.texthtmlpropertiesad=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].texthtmlproperties

this.textadeditbox=this.addata.json.jsonAd[0].phases[this.phaseid].items[0].imageedit[0].editboxad
for(var x=0;x<this.textadeditbox.length;x++)
{

this.textadeditboxcontent.push({
  'textinput':this.textadeditbox[x].textinput,
  'setextleft':this.textadeditbox[x].setextleft,
  'settexttop':this.textadeditbox[x].settexttop,
  'setheight':this.textadeditbox[x].setheight,
  'setwidth':this.textadeditbox[x].setwidth,
  'fontsize':this.textadeditbox[x].fontsize,
  'settextrotate':this.textadeditbox[x].settextrotate,
  'settextcolor':this.textadeditbox[x].settextcolor,
  'fontfamily':this.textadeditbox[x].setfontfamily,
  'textdecoration':this.textadeditbox[x].textdecoration,
  'settextfontstyle':this.textadeditbox[x].settextfontstyle,
  'settextfontweight':this.textadeditbox[x].settextfontweight,
  'settexttalign':this.textadeditbox[x].settexttalign

})

this.edidadactive1=true
}




for(var j=0;j<this.texthtmlpropertiesad.length;j++)
{

this.editboxad.push({
  'textinput':this.texthtmlpropertiesad[j].inputHtml,
  'setextleft':this.texthtmlpropertiesad[j].setextleft,
  'settexttop':this.texthtmlpropertiesad[j].settexttop,
  'setheight':this.texthtmlpropertiesad[j].setheight,
  'setwidth':this.texthtmlpropertiesad[j].setwidth,
  'fontsize':this.texthtmlpropertiesad[j].fontsize,
  'settextrotate':this.texthtmlpropertiesad[j].settextrotate,
  'settextcolor':this.texthtmlpropertiesad[j].settextcolor,
  'fontfamily':this.texthtmlpropertiesad[j].setfontfamily,
  'textdecoration':this.texthtmlpropertiesad[j].textdecoration,
  'settextfontstyle':this.texthtmlpropertiesad[j].settextfontstyle,
  'settextfontweight':this.texthtmlpropertiesad[j].settextfontweight,
  'settexttalign':this.texthtmlpropertiesad[j].settexttalign
  })

  this.edidadactive=true
}

}

  
textoblique(){
  this.count7++
if(this.count7%2!=0){
    var x=document.getElementById('textcolor_'+this.getmyeditid)
    x.style.fontStyle = "italic";
  
    }
     else{
         var x=document.getElementById('textcolor_'+this.getmyeditid)
         x.style.fontStyle = "normal";
        
     }


}
tap(i)
{

}

textbold()
{
this.count8++
if(this.count8%2!=0){
  var x=document.getElementById('textcolor_'+this.getmyeditid)
  x.style.fontWeight = "900";
}
else{
var x=document.getElementById('textcolor_'+this.getmyeditid)
x.style.fontWeight = "400";

}
}

textleft(){
 var x=document.getElementById('textcolor_'+this.getmyeditid)
 x.style.textAlign = "start"

}

textcenter(){

  var x = document.getElementById('textcolor_'+this.getmyeditid)
  x.style.textAlign = 'center'

}
textright(){
  var x = document.getElementById('textcolor_'+this.getmyeditid)
  x.style.textAlign = 'end'

}

 headertap(){
    this.count9++
    if (this.count9 % 2 != 0) {
      var x = document.getElementById('textcolor_'+this.getmyeditid)
      x.style.textDecoration = 'underline'
  
    }
    else {
      var x = document.getElementById('textcolor_'+this.getmyeditid)
      x.style.textDecoration = 'none'
    
    }
    }

func(id){
if(this.getmyeditid==undefined)
{
  let toast=this.toastCtrl.create({
             message:'Double Tap To Choose Text Box',
              duration: 2000,
              position: 'bottom'
  })
  toast.present()
}
else{
    var x=document.getElementById('textcolor_'+this.getmyeditid)
    var y=document.getElementById('colorbox')
     if (id == 0) {
            x.style.color = "#6F983A"
            y.style.backgroundColor='#6F983A'
            this.textcolor='#6F983A'

        } else if (id == 1) {
            x.style.color = "#0F8EFC"
            y.style.backgroundColor='#0F8EFC'
             this.textcolor='#0F8EFC'
        } else if (id == 2) {
            x.style.color = "#2D3192"
           y.style.backgroundColor='#2D3192'
            this.textcolor='#2D3192'
        } else if (id == 3) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
            this.textcolor='#015B7E'

        } else if (id == 4) {

            x.style.color = "#1B1464"
            y.style.backgroundColor='#1B1464'
            this.textcolor='#1B1464'
                     
        } else if (id == 5) {

            x.style.color = "#003664"
            y.style.backgroundColor='#003664'
            this.textcolor='#003664'
        } else if (id == 6) {

            x.style.color = "#AED700"
            y.style.backgroundColor='#AED700'
            this.textcolor='#AED700'
        } else if (id == 7) {

            x.style.color = "#7DA7D9"
            y.style.backgroundColor='#7DA7D9'
            this.textcolor='#7DA7D9'
        } else if (id == 8) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
             this.textcolor='#015B7E'
        } else if (id == 9) {

            x.style.color = "#A1410E"
            y.style.backgroundColor='#A1410E'
            this.textcolor='#A1410E'   
        } else if (id == 10) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
            this.textcolor='#015B7E'
        } else if (id == 11) {

            x.style.color = "#A1410E"
            y.style.backgroundColor='#A1410E'
            this.textcolor='#A1410E'
        } else if (id == 12) {

            x.style.color = "#9DA2A7"
            y.style.backgroundColor='#9DA2A7'
            this.textcolor='#9DA2A7'
        } else if (id == 13) {

            x.style.color = "#F36523"
            y.style.backgroundColor='#F36523'
            this.textcolor='#F36523'
        } else if (id == 14) {

            x.style.color = "#FCAF5D"
            y.style.backgroundColor='#FCAF5D'
            this.textcolor='#FCAF5D'
        } else if (id == 15) {

            x.style.color = "#FDC78B"
            y.style.backgroundColor='#FDC78B'
            this.textcolor='#FDC78B'
        } else if (id == 16) {

            x.style.color = "#FEF89A"
            y.style.backgroundColor='#FEF89A'
            this.textcolor='#FEF89A'
        } else if (id == 17) {

            x.style.color = "#817B00"
            y.style.backgroundColor='#817B00'
            this.textcolor='#817B00'
        } else if (id == 18) {

            x.style.color = "#F79578"
            y.style.backgroundColor='#F79578'
            this.textcolor='#F79578'
        } else if (id == 19) {

            x.style.color = "#FEF200"
            y.style.backgroundColor='#FEF200'
            this.textcolor='#FEF200'
        } else if (id == 20) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
            this.textcolor='#015B7E'
        } else if (id == 21) {

            x.style.color = "#7B2E00"
            y.style.backgroundColor='#7B2E00'
            this.textcolor='#7B2E00'
        } else if (id == 22) {

            x.style.color = "#000000"
            y.style.backgroundColor='#000000'
            this.textcolor='#000000'
        } else if (id == 23) {

            x.style.color = "#111111"
            y.style.backgroundColor='#111111'
            this.textcolor='#111111'
        } else if (id == 24) {

            x.style.color = "#FCAF5D"
            y.style.backgroundColor='#FCAF5D'
            this.textcolor='#FCAF5D'
        } else if (id == 25) {

            x.style.color = "#005826"
            y.style.backgroundColor='#005826'
            this.textcolor='#005826'
        } else if (id == 26) {

            x.style.color = "#FEF89A"
            y.style.backgroundColor='#FEF89A'
            this.textcolor='#FEF89A'
        } else if (id == 27) {

            x.style.color = "#007237"
            y.style.backgroundColor='#007237'
            this.textcolor='#007237'
        } else if (id == 28) {

            x.style.color = "#F79578"
            y.style.backgroundColor='#F79578'
            this.textcolor='#F79578'
        } else if (id == 29) {
            x.style.color = "#00A650"
            y.style.backgroundColor='#00A650'
            this.textcolor='#00A650'

        }
   }
  }


  openFontStyle(){
 let actionsheet=this.actionsheetCtrl.create({
  title:'Choose',
  cssClass:'action-sheet',
  buttons:[
  {
    text:'Impact',
    handler:()=>{
      this.imapctstyle()
    }
  },

  {
    text:'Verdana',
    handler:()=>{
      this.Verdanastyle()
    }
  },


  {
    text:'Times New Roman',
    handler:()=>{
  this.timenewroman()     
    }
  },
  {
    text:'Arial',
    handler:()=>{
      this.Arial()
    }
  },
  {
    text:'Georgia',
    handler:()=>{
      this.Georgia()
    }
  },
  {
    text:'Lucida Console',
    handler:()=>{
      this.Lucidaconsole()
    }
  }
    
  ]
 });
actionsheet.present(); 
}
imapctstyle()
{


  var x=document.getElementById('textcolor_'+this.getmyeditid)
   x.style.fontFamily='Impact'
}
Verdanastyle()
{

  var x=document.getElementById('textcolor_'+this.getmyeditid)
  x.style.fontFamily='Verdana'
}

timenewroman()
{

  var x=document.getElementById('textcolor_'+this.getmyeditid)
  x.style.fontFamily='Times New Roman'
}

Georgia(){
  var x=document.getElementById('textcolor_'+this.getmyeditid)
  x.style.fontFamily='Georgia'
}

Arial(){
 
 var x=document.getElementById('textcolor_'+this.getmyeditid)
  x.style.fontFamily='Arial' 
}

Lucidaconsole(){
 
  var x=document.getElementById('textcolor_'+this.getmyeditid)
  x.style.fontFamily='Lucida Console'
}

colortap(){

    this.count2++
    if(this.count2%2!=0)
    {
 this.colorboard=true
  }
  else{
 this.colorboard=false
  }

  }

changeposition(i){
 this._zone.run(() => {
	 	var rec = document.getElementById(0+"_b").getBoundingClientRect();
    })

}


  moveon(i){
    this.addbuttoncount++
if(this.addbuttoncount%2!=0)
{
this.textstyleactive=true
this.textstyleactive1=false
this.imagestyleactive1=false

}
else{
 this.textstyleactive=false
this.textstyleactive1=true 
this.imagestyleactive1=false

}

}

getpos(i){


var rec = document.getElementById(i+"_b").getBoundingClientRect();
   
    
this.toppos=rec.top
this.leftpos=rec.left

}




 deletetext(i)
{
  this.boxactive=false
this.textdata.splice(i,1)

this.scalerotatechange=false
this.textrotatechange=false







}
scale(i)
{
this.scalecount++
if(this.scalecount%2!=0)
{
this.scalerotatechange=true
this.textrotatechange=false
this.scaleid=i

}
else
{
  this.scalerotatechange=false
   this.textrotatechange=false
}
}

textscalerange()
{

var x=document.getElementById(this.scaleid+'_a')

x.style.height=(this.scaletextadjustment+30)+'px'

 
var x=document.getElementById(this.scaleid+'_b')

x.style.width=(this.scaletextadjustment+30)+'%'




var x=document.getElementById('textcolor_'+this.scaleid)

x.style.fontSize=this.scaletextadjustment+'px'











}



moveonimage()
{
}











textforward()
{
}

doubletaptext(id)
{
if(this.boxactive==true)
{
var y=document.getElementById('textcolor_'+localStorage['MyId'])
y.style.backgroundColor='transparent'
var i=(<HTMLInputElement>document.getElementById(localStorage['MyId']+'_imagerotate')).src=""
var rotateimage=(<HTMLInputElement>document.getElementById(localStorage['MyId']+'_move')).src=""
var deletetexticon=(<HTMLInputElement>document.getElementById(localStorage['MyId']+'_delete')).src=""
var scaletexticon=(<HTMLInputElement>document.getElementById(localStorage['MyId']+'_scale')).src=""
var x=document.getElementById('textcolor_'+id)
x.style.backgroundColor='rgba(0,0,0,.3)'
var j=(<HTMLInputElement>document.getElementById(id+'_imagerotate')).src = "assets/img/editorimage/rotate.png"
var rotateimage1=(<HTMLInputElement>document.getElementById(id+'_move')).src="assets/img/editorimage/move.png"
var deletetexticon1=(<HTMLInputElement>document.getElementById(id+'_delete')).src="assets/img/editorimage/recycle-bin.png"
var scaletexticon1=(<HTMLInputElement>document.getElementById(id+'_scale')).src="assets/img/editorimage/001-hand.png"

this.getmyeditid=id
localStorage['MyId']=id

}
else{


var x=document.getElementById('textcolor_'+id)
x.style.backgroundColor='rgba(0,0,0,.3)'
var k=(<HTMLInputElement>document.getElementById(id+'_imagerotate')).src = "assets/img/editorimage/rotate.png"
var rotateimage1=(<HTMLInputElement>document.getElementById(id+'_move')).src="assets/img/editorimage/move.png"
var deletetexticon2=(<HTMLInputElement>document.getElementById(id+'_delete')).src="assets/img/editorimage/recycle-bin.png"
var scaletexticon2=(<HTMLInputElement>document.getElementById(id+'_scale')).src="assets/img/editorimage/001-hand.png"

this.getmyeditid=id
localStorage['MyId']=id
this.boxactive=true
}
}

tapedittext1(id)
  {
    this.textdata.push(this.editboxad[id].textinput)
    
    for(var i=0;i<this.textdata.length;i++)
    {
       if(this.editboxad[id].textinput==this.textdata[i])
       {
      
      this.textdataeditfeild=this.textdata[i]
      this.settexttop=this.editboxad[id].settexttop
     this.setextleft=this.editboxad[id].setextleft
       this.setheight=this.editboxad[id].setheight
      this.setwidth=this.editboxad[id].setwidth
      
     this.fontsize=this.editboxad[id].fontsize
     this.settextrotate=this.editboxad[id].settextrotate
      this.settextcolor=this.editboxad[id].settextcolor
      this.setfontfamily=this.editboxad[id].fontfamily
      this.settextdecoration=this.editboxad[id].textdecoration
      this.settextfontstyle=this.editboxad[id].settextfontstyle
      this.setfontweight=this.editboxad[id].settextfontweight
      this.settexttalign=this.editboxad[id].settexttalign

this.textid=i
this.textactive=true
this.editboxad.splice(id,1)
       }
    }
    this.TextEdit(this.textactive)
    
  }
  tapedittext2(id)
  {
    this.textdata.push(this.textadeditboxcontent[id].textinput)
    
    for(var i=0;i<this.textdata.length;i++)
    {
       if(this.textadeditboxcontent[id].textinput==this.textdata[i])
       {
      
      this.textdataeditfeild=this.textdata[i]
      this.settexttop=this.textadeditboxcontent[id].settexttop
     this.setextleft=this.textadeditboxcontent[id].setextleft
       this.setheight=this.textadeditboxcontent[id].setheight
      this.setwidth=this.textadeditboxcontent[id].setwidth
      
     this.fontsize=this.textadeditboxcontent[id].fontsize
     this.settextrotate=this.textadeditboxcontent[id].settextrotate
      this.settextcolor=this.textadeditboxcontent[id].settextcolor
      this.setfontfamily=this.textadeditboxcontent[id].fontfamily
      this.settextdecoration=this.textadeditboxcontent[id].textdecoration
      this.settextfontstyle=this.textadeditboxcontent[id].settextfontstyle
      this.setfontweight=this.textadeditboxcontent[id].settextfontweight
      this.settexttalign=this.textadeditboxcontent[id].settexttalign

this.textid=i
this.textactive=true
this.textadeditboxcontent.splice(id,1)
       }
    }
    this.TextEdit(this.textactive)
  }




  TextEdit(textactive)
  {
this.chooseeditingmode=1
this.flagtext=true
this.flagactive=1
var x = document.getElementById('footeractive')
    x.style.height = '110px'
this.videoactive=false
this.ImageVideoContent=true
this.flag1=true
this.textstyleactive1=false

if(textactive==true)
{

 
  this.textadd=true
this.elementsdata=this.imagedata.concat(this.textdata)
this.countinput++
  this.textstyleactive1=true
  this.imagestyleactive1=false
this.htmlactive=false
this.textstyleactive=false

setTimeout(()=>{
  this.taptest()
},1)
}
else if(textactive==false)
{
  this.textdata.push(this.inputdata)
  this.textadd=true
  this.elementsdata=this.imagedata.concat(this.textdata)
  this.countinput++
    this.textstyleactive1=true
    this.imagestyleactive1=false
  this.htmlactive=false
  this.textstyleactive=false
}
  }
taptest()
{

var i=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).value = this.textdataeditfeild; 
var settexttop=(<HTMLInputElement>document.getElementById(this.textid+'_b')).style.top=this.settexttop
var setextleft=(<HTMLInputElement>document.getElementById(this.textid+'_b')).style.left=this.setextleft
var setheight=(<HTMLInputElement>document.getElementById(this.textid+'_a')).style.height=this.setheight
var setwidth=(<HTMLInputElement>document.getElementById(this.textid+'_b')).style.width=this.setwidth
var fontsize=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.fontSize=this.fontsize
var settextrotate=(<HTMLInputElement>document.getElementById(this.textid+'_a')).style.transform=this.settextrotate
var settextcolor=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.color=this.settextcolor
var setfontfamily=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.fontFamily=this.setfontfamily
var settextdecoration=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.textDecoration=this.settextdecoration
var settextfontstyle=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.fontStyle=this.settextfontstyle
var setfontweight=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.fontWeight=this.setfontweight
var settexttalign=(<HTMLInputElement>document.getElementById('textcolor_'+this.textid)).style.textAlign=this.settexttalign

}




getmytext()
{
var hope=document.getElementById("hopecontent").innerHTML
  let modal = this.modalcontroller.create(VieweditorPage,{hope1:hope})
   modal.present()
}


myClickFunction(  ){
html2canvas(document.getElementById('hopecontent'), {
      
      onrendered: (canvas)=> {
        var img = canvas.toDataURL("image/jpeg");
        window.open(img)
       console.log(img)
   this.imageshow=img
 }
      
    });
}

   imagebottom()
   {
    var j=document.getElementById(this.imagedata.length-1+'_z')
    j.style.left="43%"
    j.style.transform='translate(-50%)'



   }
   imagebottomtop()
   {
    var j=document.getElementById(this.imagedata.length-1+'_z')
    j.style.top="16%"

   }

   textbottomtop()
   {
    var y=document.getElementById(this.getmyeditid+'_b')
    y.style.top="26%"
   }

textbottom()
{
var y=document.getElementById(this.getmyeditid+'_b')
y.style.left="37%"
}


preview(){


if(this.editbox==true)
{
for(var i=0;i<this.imagedata.length;i++)
{
    var x=document.getElementById(i+'_x')

  x.style.borderStyle='none'
}

for(var i=0;i<this.textdata.length;i++ )
{
 
  var y=document.getElementById(i+'_a')
      y.style.borderStyle='none'
      var z=document.getElementById('textcolor_'+i)
      z.style.backgroundColor='transparent'

}









}else if(this.editbox==false)
{
for(var i=0;i<this.imagedata.length;i++)
{
    var x=document.getElementById(i+'_x')
  x.style.borderStyle='dashed'
}

for(var i=0;i<this.textdata.length;i++ )
{
 
  var y=document.getElementById(i+'_a')
      y.style.borderStyle='dashed'
      var j=document.getElementById('textcolor_'+i)
       j.style.backgroundColor='rgba(0,0,0,.3)'

}

}


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TextImageEditorPage');
  }

  

  changewidth()
  {
this.imageid=this.imagedata.length-1+'_z'
var x=document.getElementById(this.imageid)

x.style.width=this.widthadjustment+'%'
  }
  changeheight()
  {
this.imageid=this.imagedata.length-1+'_x'
var x=document.getElementById(this.imageid)
x.style.height=(this.heightadjustment+92)+'px'
 }
   widthimage()
  {
    this.widthcount++
    if(this.widthcount%2!=0)
    {
      this.widthchange=true  
    }
    else{
      this.widthchange=false
    }
}

heightimage()
{
this.heightcount++
if(this.heightcount%2!=0)
{
this.heightchange=true
}
else {
  this.heightchange=false
}

}
widthpic(id)
  {
  }
imageforward(){
this.lastelement=this.imagedata[this.imagedata.length-1]
this.imagedata.pop()
this.imagedata.splice(0,0,this.lastelement)
}

imagebackward()
{
  this.imagedata.reverse()
  this.flag=false
  this.flag1=true
  for(var x=0;x<this.imagedata.length;x++)
  {
    
   if(x==this.imagedata.length-1){
    
    var e=(<HTMLInputElement>document.getElementById(this.imagedata.length-1+'_e')).src="assets/img/editorimage/move.png"
   }
   else{
    
    var e=(<HTMLInputElement>document.getElementById(x+'_e')).src=""
   }
   
  } 

}
deleteimg(id)
{

this.imagedata.splice(id,1)
this.rotatechange=false
this.scalechange=false
this.heightchange=false
this.widthchange=false


}
tapme()
{
	this.count++
this.imagedata.push({'imagecount':this.count})
if(this.editflags!=null)
{
this.flags=this.editflags
}


this.editAd=false
this.navCtrl.setRoot(LibraryPage,{editAd:this.editAd,
  adName:this.adName,
  adId:this.adId,
  flags:this.flags,
  
})
}
scaleimage(i)
{
 
if(i==0)
{
     this.countscaleimg1++
    if (this.countscaleimg1 % 2 != 0) {
this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1.5)'
   
     this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '246px'
      
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top = '17px'
     

    }
    else {

     this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1)'
  
   this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '189px'
    
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top='49px'
      
    
      }
}
else if(i==1)
{
     this.countscaleimg2++
    if (this.countscaleimg2 % 2 != 0) {
this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1.5)'
   
     this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '246px'
      
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top = '17px'
     

    }
    else {

     this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1)'
  
   this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '189px'
    
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top='49px'
      
    
      }
}
else if(i==2)
{
     this.countscaleimg3++
    if (this.countscaleimg3 % 2 != 0) {
this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1.5)'
   
     this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '246px'
      
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top = '17px'
     

    }
    else {

     this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1)'
  
   this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '189px'
    
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top='49px'
      
    
      }
}
else if(i==3)
{
     this.countscaleimg4++
    if (this.countscaleimg4 % 2 != 0) {
this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1.5)'
   
     this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '246px'
      
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top = '17px'
     

    }
    else {

     this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1)'
  
   this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '189px'
    
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top='49px'
      
    
      }
}
else if(i==4)
{
     this.countscaleimg5++
    if (this.countscaleimg5 % 2 != 0) {
this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1.5)'
   
     this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '246px'
      
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top = '17px'
     

    }
    else {

     this.imageid1=i+'_y'
      var y = document.getElementById(this.imageid1)
      y.style.transform = 'scale(1,1)'
  
   this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
      x.style.height = '189px'
    
       this.imageid2=i+'_z'
      var z = document.getElementById(this.imageid2)
      z.style.top='49px'
      
    
      }
}

}

textrotateon(i)
{
this.texrotatecounts++
if(this.texrotatecounts%2!=0)
{

this.textrotatechange=true
this.scalerotatechange=false
this.rotateid=i

}
else{
 
  this.textrotatechange=false
  this.scalerotatechange=false
}
}

textrotaterange()
{
  var x=document.getElementById(this.rotateid+'_a')
  x.style.transform = 'rotate('+this.rotatetextadjustment+'deg)'
}
scaleeditorimage()
{
  this.scalecount++
if(this.scalecount%2!=0)
{
   this.scalechange=true
   this.rotatechange=false
}
else{
this.scalechange=false
this.rotatechange=false
}


}


changerotation()
{
  this.imagerotatecount++
  if(this.imagerotatecount%2!=0)
 {
this.rotatechange=true
this.scalechange=false

}
else{
  this.rotatechange=false
  this.scalechange=false
}


}

changerotate()
{

console.log('rotate('+this.rotateadjustment+'deg)')
this.imageid=this.imagedata.length-1+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate('+this.rotateadjustment+'deg)'
}

changescale()
{
  
this.imageid=this.imagedata.length-1+'_x'
var x=document.getElementById(this.imageid)

x.style.height=this.scaleadjustment+'%'

  this.imageid=this.imagedata.length-1+'_z'
var x=document.getElementById(this.imageid)

x.style.width=this.scaleadjustment+'%'
}



rotateon(i)
{
	
  
if(i==0)
{
	this.count1++
if(this.count1%4==1){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

  }
  else if(this.count1%4==2){
 
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(180deg)'

    }
  else if(this.count1%4==3){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(270deg)'

    }
else if(this.count1%4==0){
   
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(360deg)'
  
}

}


 else if(i==1)
{
	this.count2++
if(this.count2%4==1){
     
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

  }
  else if(this.count2%4==2){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(180deg)'

    }
  else if(this.count2%4==3){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(270deg)'

    }
else if(this.count2%4==0){
   
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(360deg)'
  
}

}

else if(i==2)
{
	this.count3++
if(this.count3%4==1){
     
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

  }
  else if(this.count3%4==2){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(180deg)'

    }
  else if(this.count3%4==3){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(270deg)'

    }
else if(this.count3%4==0){
   
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(360deg)'
  
}

}

else if(i==3)
{
	this.count4++
if(this.count4%4==1){
     
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

  }
  else if(this.count4%4==2){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

    }
  else if(this.count4%4==3){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

    }
else if(this.count4%4==0){
   
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'
  
}

}



else if(i==4)
{
	this.count5++
if(this.count5%4==1){
     
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

  }
  else if(this.count5%4==2){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

    }
  else if(this.count5%4==3){
  
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'

    }
else if(this.count5%4==0){
   
this.imageid=i+'_x'
var x=document.getElementById(this.imageid)
  x.style.transform = 'rotate(90deg)'
  
}

}
}


 
camera1()
{
	this.camera.getPicture({
      quality: 75,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
  
      this.imgsrc = "data:image/jpeg;base64," + imageData;

    this.imageupload()
    }, (err) => {
    })
}


gallery() {
    this.camera.getPicture({
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 500,
      targetWidth: 500,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.imgsrc = "data:image/jpeg;base64," + imageData;
      this.imageupload()
    }, (err) => {
    })
  }
ImageUpload()
{
this.chooseeditingmode=2
	var x = document.getElementById('footeractive')
    x.style.height = '110px'
  this.videoactive=false
this.ImageVideoContent=true

this.textstyleactive1=false
this.textstyleactive=false
this.imagestyleactive1=true
this.htmlactive=false
let actionsheet = this.actionsheetCtrl.create({
       title: 'Image Upload!',
       buttons: [{
         text: 'Upload From Gallery',
         handler: () => {
     this.gallery()
         },
       }
         ,
       {
         text: 'Take A Snap',
         handler: () => {
         
          this.camera1()
         }
       }]

     })
     actionsheet.present();
 
}

imageupload()
{

 
 let loading=this.loadingCtrl.create({
  content:'wait..'
 })
 loading.present()


var tok = localStorage['token']
  let token1 = 'Bearer' + tok
  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
  let requestOptions = new RequestOptions({ headers: headers })

  const filetransfers: FileTransferObject = this.filetransfer.create();
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'filename.jpg',
    chunkedMode: false,
    headers: headers,
    httpMethod: 'PUT'

  }
  filetransfers.upload(this.imgsrc,'http://stats.didws.com:10001/uploadAdFileBlob?originalFileName=filename.jpg', options)
    .then((data) => {
  loading.dismiss()
       this.imageafterupload = JSON.parse(data.response).url
       this.imagedata.push(this.imageafterupload)   
    }, (err) => {
     alert('error'+JSON.stringify(err))    
    })
}


 saveimagetext()
  {
    if(this.editbox==true)
{
  html2canvas(document.getElementById('hopecontent'), {
      
      onrendered: (canvas)=> {
        var img = canvas.toDataURL("image/jpeg");
        window.open(img)
       console.log(img)
   this.imageshow=img
   this.uploadimage()
 }
      
    }); 
  
 }  
else{

let toast=this.toastCtrl.create({
	duration:3000,
	message:'Please Save Image'
})
toast.present()
}
}


uploadimage()
{
  var tok = localStorage['token']
  let token1 = 'Bearer' + tok
 
  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
  let requestOptions = new RequestOptions({ headers: headers })
  const filetransfers: FileTransferObject = this.filetransfer.create();
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'filename.jpg',
    chunkedMode: false,
    headers: headers,
    httpMethod: 'PUT'

  }
  let loading=this.loadingCtrl.create({content:'Wait..'})
  loading.present()

  filetransfers.upload(this.imageshow,'http://stats.didws.com:10001/uploadAdFileBlob?originalFileName=filename.jpg', options)
    .then((data) => {
    loading.dismiss() 
      this.imageshow = JSON.parse(data.response).url
    let toast=this.toastCtrl.create({
	duration:3000,
	message:this.imageshow
})
    this.showimage()
    }, (err) => {
     loading.dismiss()
     alert('erro34' + JSON.stringify(err))
    })

}



videoupload()
{
  this.chooseeditingmode=3
	var x = document.getElementById('footeractive')
    x.style.height = '73px'
this.videoactive=true
this.ImageVideoContent=false
this.imagestyleactive1=false
this.htmlactive=false
this.textstyleactive1=false
    
}
UploadVideoFromGallery()
  {
    
    this.camera.getPicture({
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      mediaType: this.camera.MediaType.VIDEO

    })
      .then((fileuri) => {

      this.videodata=fileuri
  
      },
      (err) => {
     alert(err)

      } )

  }
  uploadvideosecond()
{
  var tok = localStorage['token']
  let token1 = 'Bearer' + tok
 
  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
  let requestOptions = new RequestOptions({ headers: headers })

  const filetransfers: FileTransferObject = this.filetransfer.create();
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName: 'filename.mp4',
    chunkedMode: false,
    mimeType: "video/mp4",
    headers: headers,
    httpMethod: 'PUT'

  }
  filetransfers.onProgress((e) => {


    this._zone.run(() => {
      this.loadProgress = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
    })
  
    
  });

  filetransfers.upload(this.videodata,'http://stats.didws.com:10001/uploadAdFileBlob?originalFileName=DSDDS.mp4', options)
    .then((data) => {
  
      this.videosrc = JSON.parse(data.response).url

      this.videoplay = JSON.parse(data.response).url
   
    this.showVideo()

    }, (err) => {
     alert('erro34' + JSON.stringify(err))
    })

} 

showVideo()
{
   this.items.push({ 'Video': this.videoplay,'choosemode':2})
this.phases.push({'name':localStorage['phasename'],'flags':this.flags,'items':this.items,'attentionSec':localStorage['attentionSec']})
this.jsonAd.push({'name':localStorage['adName'],'phases':this.phases})
let loading=this.loadingCtrl.create({content:'Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.updateAdContent(this.jsonAd))
 .subscribe(data => {
   loading.dismiss()
   this.navCtrl.setRoot(VideoplayeradPage)
             })
}

  htmlcode()
  {
    this.chooseeditingmode=4
var x = document.getElementById('footeractive')
    x.style.height = '73px'
this.videoactive=false
this.ImageVideoContent=false
this.imagestyleactive1=false
this.htmlactive=true
this.textstyleactive1=false

  }
  previewhtml() {
  var inputHtml = (<HTMLInputElement>document.getElementById('myTextarea')).value
  this.savedhtml = inputHtml
  let modal = this.modalcontroller.create(HtmlpreviewPage, { html: inputHtml })
   modal.present()
  }
  savecode()
  {
    var inputHtml = (<HTMLInputElement>document.getElementById('myTextarea')).value
     this.savedhtml = inputHtml
      this.showHTML()
  }
  showHTML()
{

   this.items.push({ 'Html': this.savedhtml,'choosemode':3})

this.phases.push({'name':localStorage['phasename'],'flags':this.flags,'items':this.items,'attentionSec':localStorage['attentionSec']})
this.jsonAd.push({'name':localStorage['adName'],'phases':this.phases})
let loading=this.loadingCtrl.create({content:'Wait..'})

Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.updateAdContent(this.jsonAd))
 .subscribe(data => {
   loading.dismiss()
   this.navCtrl.setRoot(YourhtmladPage)
             })
}




showimage()
{
if(this.chooseeditingmode==3)
{
this.uploadvideosecond()
}
else if(this.chooseeditingmode==4)
{
this.savecode()
}
else {
for(var i=0;i<this.textdata.length;i++)
{
var inputHtml = (<HTMLInputElement>document.getElementById('textcolor_'+i)).value
var settexttop=(<HTMLInputElement>document.getElementById(i+'_b')).style.top
var setextleft=(<HTMLInputElement>document.getElementById(i+'_b')).style.left
var setheight=(<HTMLInputElement>document.getElementById(i+'_a')).style.height
var setwidth=(<HTMLInputElement>document.getElementById(i+'_b')).style.width

var marginleft=(<HTMLInputElement>document.getElementById(i+'_b')).style.marginLeft
var fontsize=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.fontSize
var settextrotate=(<HTMLInputElement>document.getElementById(i+'_a')).style.transform
var settextcolor=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.color
var setfontfamily=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.fontFamily
var settextdecoration=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.textDecoration
var settextfontstyle=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.fontStyle
var setfontweight=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.fontWeight
var settexttalign=(<HTMLInputElement>document.getElementById('textcolor_'+i)).style.textAlign


this.texthtmlproperties.push({'inputHtml':inputHtml,
'settexttop':settexttop,
'setextleft':setextleft,
'setheight':setheight,
'setwidth':setwidth,
'fontsize':fontsize,
'settextrotate':settextrotate,
'settextcolor':settextcolor,
'setfontfamily':setfontfamily,
'textdecoration':settextdecoration,
'settextfontstyle':settextfontstyle,
'settextfontweight':setfontweight,
'settexttalign':settexttalign

})
console.log(settextdecoration)
}


for(var i=0;i<this.imagedata.length;i++)
{
var setHeight=document.getElementById(i+'_x').offsetHeight
var setWidth=document.getElementById(i+'_z').offsetWidth
var settop=document.getElementById(i+'_z').style.top
var setleft=document.getElementById(i+'_z').style.left
var setrotate=document.getElementById(i+'_x').style.transform
var transform=document.getElementById(i+'_z').style.transform
this.imagehtmlproperties.push({'transform':transform,'setHeight':setHeight,'setWidth':setWidth,'settop':settop,'setleft':setleft,'setrotate':setrotate})


}





if(this.editAd==true)
{
for(var x=0;x<this.textadeditboxcontent.length;x++)
{

this.editboxad.push({
  'textinput':this.textadeditboxcontent[x].textinput,
  'setextleft':this.textadeditboxcontent[x].setextleft,
  'settexttop':this.textadeditboxcontent[x].settexttop,
  'setheight':this.textadeditboxcontent[x].setheight,
  'setwidth':this.textadeditboxcontent[x].setwidth,
  'fontsize':this.textadeditboxcontent[x].fontsize,
  'settextrotate':this.textadeditboxcontent[x].settextrotate,
  'settextcolor':this.textadeditboxcontent[x].settextcolor,
  'fontfamily':this.textadeditboxcontent[x].setfontfamily,
  'textdecoration':this.textadeditboxcontent[x].textdecoration,
  'settextfontstyle':this.textadeditboxcontent[x].settextfontstyle,
  'settextfontweight':this.textadeditboxcontent[x].settextfontweight,
  'settexttalign':this.textadeditboxcontent[x].settexttalign



  
})

}

}









this.imageproperties.push({'imagearray':this.imagedata,
'imagehtmlproperties':this.imagehtmlproperties,
'texthtmlproperties':this.texthtmlproperties,
'editboxad':this.editboxad
})









this.items.push({ 'imageedit': this.imageproperties,'choosemode':1})





if(this.editAd==true)
{
  this.phases.push({'name':this.editflagsname,'flags':this.editflags,'items':this.items})
  this.jsonAd.push({'name':this.editAdname,'phases':this.phases})
}
else{
this.phases.push({'name':localStorage['phasename'],'flags':this.flags,'items':this.items})
this.jsonAd.push({'name':localStorage['adName'],'phases':this.phases}) 
}
if(this.testupadte==1)
{

this.phaseid
this.phases.splice(this.phaseid,1)
let loading=this.loadingCtrl.create({
  cssClass: 'transparent',
  spinner: 'hide',
  content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
})

  Observable.of(loading).flatMap(loading=>loading.present())
  .flatMap(()=>this.security.updateAdContent(this.jsonAd))
   .subscribe(data => {
     loading.dismiss()
     this.navCtrl.setRoot(YourAdPage)
               })

}

else
{
  let loading=this.loadingCtrl.create({
    cssClass: 'transparent',
    spinner: 'hide',
    content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
  })

  Observable.of(loading).flatMap(loading=>loading.present())
  .flatMap(()=>this.security.updateAdContent(this.jsonAd))
   .subscribe(data => {
     loading.dismiss()
     this.navCtrl.setRoot(YourAdPage)
               })
  
              }     
            
            
            
            }


}




}
