

import { Component, ElementRef } from '@angular/core';
import { ModalController, ActionSheetController, IonicPage, NavController, NavParams, ToastController, Platform, LoadingController } from 'ionic-angular';
import {ImagePage} from '../image/image';
import {HtmlPage } from '../html/html';
import { VideoPage } from '../video/video';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {  trigger, state, style, transition, animate, keyframes } from '@angular/core';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';
import { LibraryPage } from '../library/library'
import { YourAdPage } from '../your-ad/your-ad'
import * as html2canvas from 'html2canvas';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import filestack from 'filestack-js';
import { Http, Headers, RequestOptions } from '@angular/http';
import { YourvideoadPage } from '../yourvideoad/yourvideoad'
import { VideoplayeradPage } from '../videoplayerad/videoplayerad'
import { NgZone } from '@angular/core';
import { HtmlpreviewPage } from '../htmlpreview/htmlpreview'
import { YourhtmladPage } from '../yourhtmlad/yourhtmlad'
declare var window
/**
 * Generated class for the GenericPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generic',
  templateUrl: 'generic.html',
  animations: [

    //For the logo
    trigger('flyInBottomSlow', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0' }),
        animate('2000ms ease-in-out')
      ])
    ]),

    //For the background detail
    trigger('flyInBottomFast', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        style({ transform: 'translate3d(0,2000px,0)' }),
        animate('1000ms ease-in-out')
      ])
    ]),

    //For the login form
    trigger('bounceInBottom', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      transition('void => *', [
        animate('2000ms 200ms ease-in', keyframes([
          style({ transform: 'translate3d(0,2000px,0)', offset: 0 }),
          style({ transform: 'translate3d(0,-20px,0)', offset: 0.9 }),
          style({ transform: 'translate3d(0,0,0)', offset: 1 })
        ]))
      ])
    ]),

    //For login button
    trigger('fadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms 2000ms ease-in')
      ])
    ])
  ]
})
export class GenericPage {
  logoState: any = "in";
  cloudState: any = "in";
  loginState: any = "in";
  formState: any = "in";
  scaleon:boolean

  MOVEON: boolean
  MOVEON1: boolean
  textedit
  count = 0
  count1 = 0
  count2 = 0
  count3 = 0
  count4 = 0
  count5 = 0
  count6 = 0
  count7 = 0
  count8 = 0
  count9 = 0
  count10 = 0
  count11 = 0
  count12 = 0
  count13 = 0
  count14 = 0
  count15 = 0
  count16 = 0
  count17 = 0
  countscaleimg = 0
  rotate
  rotate1
  rotate2
  rotate3
  rotate4
  hope
  colorboard
  textcolor1
  saturation
  fontfamilytext
  Imagupload
  pic
  countimage = 0
  Imagupload1
  imgsrc = 'assets/img/animals_hero_lions_0.jpg'
  imgactive: boolean
  imageeditbox
  videouploadbox
  videoactive: boolean
  videodata
  textstyleactive: boolean
  clipboard
  htmlactive
  textstyleactive1: boolean
  textactive
  flag: boolean
  flag1: boolean
  imagestyleactive1: boolean
  switchOff: boolean
  gethope
  values = ''
  img
  boxwidth=86
  boxheight
  ycoordinates
  xcoordinates
  Image_Video=[]
  font=null
  textcolor='black'
  Textbox=[]
  textfrombox
  items=[]
  jsonAd=[]
  phases=[]
  flags
  nativepath: any
  
  filesToUpload: Array<File>
  fontsize = null
  textdecorattion = null
  fontstyle = null
  fontweight = null
  textalign = null
  marginleft=null
  margintop = null
  textrotate = null
  imagefor = null
  scaletext
  rotatebox
  flagcamera=0
  scaleimageparam=null
  imagewidth
  imageheight
  imagecenter
  imagetransform
  imagetransformwidth
  imagetransformheight
  choosemode = 0
  blobvideo
  textpositiony=200
  textpositionx = 100
  loadProgress = 0
  videoplay
  videosrc = null
  loadProgress1
  savedhtml
imageafterupload

  //constructor(public filetransfer:FileTransfer,public security:SecurityProvider,public loadingCtrl:LoadingController,public navParams:NavParams,public platform:Platform,public element: ElementRef, public toastCtrl: ToastController, private camera: Camera, public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {
  constructor(public modalcontroller: ModalController, public _zone: NgZone, public camera: Camera, public filetransfer: FileTransfer, public security: SecurityProvider, public loadingCtrl: LoadingController, public navParams: NavParams, public platform: Platform, public element: ElementRef, public toastCtrl: ToastController, public navCtrl: NavController, public actionsheetCtrl: ActionSheetController) {
  this.MOVEON = true
    this.MOVEON1 = false
    this.textedit
    this.colorboard = false
    this.fontfamilytext = 'Arial'
    this.videoactive = false
    this.textstyleactive = true
    this.flag = false
    this.flag1 = false
    this.imagestyleactive1 = false
    this.switchOff=false
    this.scaleon=false
    if (this.saturation==5)    {
    }

     this.ycoordinates=(80/localStorage['height'])*100
     this.xcoordinates=(26/localStorage['width'])*100    
      this.boxheight=(210/localStorage['height'])*100

this.flags=this.navParams.get('flags')
  }
  
openPicker() {
  var fsClient = filestack.init('A6Gz6JYVBQuSaK2aMaeriz');
  fsClient.pick({
    fromSources: ["local_file_system", "url"]
  }).then(function (response) {
  });
}



myClickFunction( event: any ){
html2canvas(document.getElementById('a1'), {
      
      onrendered: function(canvas) {
         this.img = canvas.toDataURL("image/jpeg");
        window.open(this.img)
       console.log(this.img)
      }
    });
}


  changescale() {
    var x = document.getElementById('textcolor')
    if (this.saturation > 0 && this.saturation<=3)
    {
      
      x.style.transform = 'scale(2,2)'
      x.style.height = '55%'
      x.style.width='53%'
      x.style.marginTop = '17px'
      x.style.marginLeft = '61px'
      this.scaletext = 1

       }

    else if (this.saturation > 4 && this.saturation<=7)
    {
      x.style.height = '36%'
      x.style.width = '32%'
      x.style.transform = 'scale(3, 3)'
      x.style.marginLeft = '83px'
      x.style.marginTop='25px'
      this.scaletext = 2
    }
    else if (this.saturation>7)
    {
      x.style.height = '29%'
      x.style.width = '25%'
      x.style.transform = 'scale(4, 4)'
      x.style.marginLeft = '95px'
      x.style.marginTop = '25px'
      this.scaletext = 3
    }
  }


  gettext() {
    if (this.flagcamera == 0) {
      var textinput = (<HTMLInputElement>document.getElementById('textcolor')).value;
      this.choosemode = 1
    }
    else if (this.flagcamera == 1) {
      alert(this.imageafterupload)
      this.choosemode = 2
      textinput = null
      this.Image_Video.push({
        'url': this.imageafterupload, ' x_percent': this.xcoordinates,
        'y_percent': this.ycoordinates, 'width_percent': 86,
        'height_percent': this.boxheight,
        'scaleimageparam': this.scaleimageparam,
        'imagewidth': this.imagewidth,
        'imageheight': this.imageheight,
        'imagecenter': this.imagecenter,
        'imagetransform': this.imagetransform,
        'imagetransformwidth': this.imagetransformwidth,
        'imagetransformheight': this.imagetransformheight,
        'rotatebox': this.rotatebox,
        'imagefor': this.imagefor

      })
    }
    else if (this.flagcamera == 2)
    {
      this.choosemode=3
      this.Image_Video.push({ 'url': this.videosrc, ' x_percent': this.xcoordinates, 'y_percent': this.ycoordinates, 'width_percent': 86, 'height_percent': this.boxheight })

    }
  this.textfrombox = textinput   
    var center='center'
    this.Textbox.push({'text':this.textfrombox,'font':this.font,
      'color': this.textcolor, 'x_percent': this.xcoordinates,
      'y_percent': this.ycoordinates, 'width_percent': 86,
      'height_percent': this.boxheight, 
      'font_size': this.fontsize, 'textdecorattion': this.textdecorattion,
      'fontstyle': this.fontstyle, 'fontweight': this.fontweight,
      'textalign': this.textalign, 'marginleft': this.marginleft,
      'margintop': this.margintop, 'textrotate': this.textrotate,
      'imagefor': this.imagefor, 'scaletext': this.scaletext,'boxrotate':this.rotatebox
    })
  
    this.items.push({ 'ImageVideo': this.Image_Video, 'Text': this.Textbox,'choosemode':this.choosemode})

this.phases.push({'name':localStorage['phasename'],'flags':this.flags,'items':this.items,'attentionSec':localStorage['attentionSec']})
this.jsonAd.push({'name':localStorage['adName'],'phases':this.phases})
  console.log(JSON.stringify(this.jsonAd))
let loading=this.loadingCtrl.create({content:'Wait..'})

Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.updateAdContent(this.jsonAd))
 .subscribe(data => {
   loading.dismiss()
   if (this.choosemode == 1) {
     this.navCtrl.setRoot(YourAdPage)
   }
   else if (this.choosemode == 2) {
     this.navCtrl.setRoot(YourvideoadPage)
   }
   else if (this.choosemode == 3) {
     this.navCtrl.setRoot(VideoplayeradPage)
   }
   else if (this.flagcamera==4) {
     this.navCtrl.setRoot(YourhtmladPage)
   }
             })

}


addget(){
  let loading=this.loadingCtrl.create({content:'Wait..'})
  Observable.of(loading).flatMap(loading=>loading.present())
  .flatMap(()=>this.security.getSingleAd())
  .subscribe(data=>{
    loading.dismiss()
    console.log(data.json)
    console.log('---' + data.json)
    
  })
}


  headertap(){
    this.count7++
    if (this.count7 % 2 != 0) {
      var x = document.getElementById('textcolor')
      x.style.textDecoration = 'underline'
      this.textdecorattion = x.style.textDecoration
    }
    else {
      var x = document.getElementById('textcolor')
      x.style.textDecoration = 'none'
      this.textdecorattion = x.style.textDecoration
    }
    }

  positiontop() {

    let ac = this.actionsheetCtrl.create({
      title: 'Choose from left ',
      buttons: [
        {
          text: '100',
          handler: () => {
            this.leftalignment(1)
            this.textpositionx=100
          }
        },
        {
          text: '200',
          handler: () => {
            this.leftalignment(2)
            this.textpositionx = 200
          }
        },
        {
          text: '300',
          handler: () => {
            this.leftalignment(3)
            this.textpositionx = 300
          }
        }
      ]
    })
    ac.present();

  }





  widthimage(){

    let ac = this.actionsheetCtrl.create({
      title: 'Choose Width ',
      buttons: [
        {
          text: '25',
          handler: () => {
            this.widthpic(1)
          }
        },
        {
          text: '50',
          handler: () => {
            this.widthpic(2)
          }
        },
        {
          text: '100',
          handler: () => {
            this.widthpic(3)
          }
        }

      ]
    })
    ac.present();
}


  widthpic(id){

    if (id == 1) {
      var x = document.getElementById('imagestyle')
      x.style.width = '25%'
      this.imagewidth = x.style.width
    }
    else if (id == 2) {
      var x = document.getElementById('imagestyle')
      x.style.width = '50%'
      this.imagewidth = x.style.width

    }
    else if (id == 3) {
      var x = document.getElementById('imagestyle')
      x.style.width = '100%'
      this.imagewidth = x.style.width
    }
  }


  imagebottom(){
    this.count14++
    if (this.count14 % 2 != 0) {
      var x = document.getElementById('imagestyle')
      x.style.marginLeft = '-4%'
      x.style.height = '60%'
      x.style.marginTop = '29px';
      this.textalign='center'
      this.imagecenter='40px'
      }
    else {
      var x = document.getElementById('imagestyle')
      x.style.marginLeft = '0%'
      x.style.height = '100%'
      x.style.marginTop = '0px';
      this.imagecenter = '0px'
    }
    }



  imageleft(){
    this.count17++
    if (this.count17 % 2 != 0) {
      var x = document.getElementById('imagestyle')
      x.style.transform = 'rotate(90deg)'
      x.style.width = '50%'
      x.style.height = '100%'
      this.imagetransform=x.style.transform
      this.imagetransformwidth = x.style.width
      this.imagetransformheight = x.style.height
    }
    else {
      var x = document.getElementById('imagestyle')
      x.style.transform = 'rotate(0deg)'
      x.style.width = '100%'
      x.style.height = '100%'
      this.imagetransform = x.style.transform
      this.imagetransformwidth = x.style.width
      this.imagetransformheight = x.style.height
      }
    }

  imageforward() {
    this.count12++
    if (this.count12%2!=0){
      var x = document.getElementById('imagestyle')
      x.style.boxShadow = '2px 1px 18px black'
      this.imagefor = x.style.boxShadow
    }
    else {
      var x = document.getElementById('imagestyle')
      x.style.boxShadow = '0px 0px 0px'
      this.imagefor = x.style.boxShadow
    }
    }

  imagebackward() {
    this.count13++
    if (this.count13 %2!=0)
    {
      var x = document.getElementById('imagestyle')
      x.style.boxShadow = 'inset 0 0 10px #000000'
      this.imagefor = x.style.boxShadow

    } 
    else {
      var x = document.getElementById('imagestyle')
      x.style.boxShadow = '0px 0px 0px'
      this.imagefor = x.style.boxShadow
    }
  }

  heightimage() {
    let ac = this.actionsheetCtrl.create({
      title: 'Choose Height',
      buttons: [
        {
          text: '100',
          handler: () => {
            this.heightpic(1)
          }
        },
        {
          text: '200',
          handler: () => {
            this.heightpic(2)
          }
        },
        {
          text: '300',
          handler: () => {
            this.heightpic(3)
          }
        }

      ]
    })
    ac.present();
  }


  heightpic(id)
  {
    if (id == 1) {

      var x = document.getElementById('imagestyle')
      x.style.height = '25%'
      this.imageheight = x.style.height

    }
    else if (id == 2) {
      var x = document.getElementById('imagestyle')
      x.style.height = '50%'
      this.imageheight = x.style.height

    }
    else if (id == 3) {
      var x = document.getElementById('imagestyle')
      x.style.height = '100%'
      this.imageheight = x.style.height
    }

  }


  leftalignment(id){
    if (id == 1) {

      var x = document.getElementById('textcolor')
      x.style.marginLeft = '0px'

      this.marginleft = 0     
    }
    else if (id == 2) {
      var x = document.getElementById('textcolor')
      x.style.marginLeft = '100px'
      this.marginleft = 100
    }
    else if (id == 3) {
      var x = document.getElementById('textcolor')
      x.style.marginLeft = '200px'
      this.marginleft = 200

    }
  }


  textbottom() {
    this.count9++
    if (this.count9 % 2 != 0) {
      var x = document.getElementById('textcolor')
      x.style.textAlign = 'center'
      this.textalign = x.style.textAlign
    }
    else {
      var x = document.getElementById('textcolor')
      x.style.textAlign = 'starttextforward'
      this.textalign = x.style.textAlign
    }
    }


  textrotateleft(){
    this.count8++
    if (this.count8 % 2 != 0) {
      var x = document.getElementById('textcolor')
      x.style.transform = 'rotate(90deg)'
      x.style.height = '150%'
      x.style.marginLeft = '70px'
      x.style.marginTop = '-20px'
      x.style.width = '30%'
      this.textrotate = x.style.transform
    }
    else {
      var x = document.getElementById('textcolor')
      x.style.transform = 'rotate(0deg)'
      x.style.height = '100%'
      x.style.marginLeft = '0px'
      x.style.marginTop = '0px'
      x.style.width = '100%'
      this.textrotate = x.style.transform
    }
    }

  textforward() {
    this.count10++
    if (this.count10%2!=0)
    {
      var x = document.getElementById('textcolor')
      x.style.textShadow = '1px 1px'
      this.imagefor = x.style.textShadow
    }
    else{
      var x = document.getElementById('textcolor')
       x.style.textShadow = '0px 0px'
        this.imagefor = x.style.textShadow
    }
    }

  textbackward(){
    this.count11++
    if (this.count11 % 2 != 0) {
      var x = document.getElementById('textcolor')
      x.style.textShadow = '-1px -1px'
      this.imagefor = x.style.textShadow
    }
    else {
      var x = document.getElementById('textcolor')
      x.style.textShadow = '0px 0px'
      this.imagefor = x.style.textShadow
    }
  
  }

  positionbottom() {
     let ac = this.actionsheetCtrl.create({
      title: 'Choose from bottom ',
      buttons: [
        {
          text: '0',
          handler: () => {
            this.bottomalignment(1)
            this.textpositiony=0
          }
        },
        {
          text: '100',
          handler: () => {
            this.bottomalignment(2)
            this.textpositiony = 100
          }
        },
        {
          text: '200',
          handler: () => {
            console.log('hi')
            this.bottomalignment(3)
            this.textpositiony = 200
          }
        }
      ]
    })
    ac.present();

  }
  bottomalignment(id) {
    if (id == 1) {
      var x = document.getElementById('textcolor')
      x.style.marginTop = '60px',   
        this.margintop = '60px'
    }
    else if (id==2)
    {
      var x = document.getElementById('textcolor')
      x.style.marginTop = '36px'
      this.margintop = '36px'
    }
    else if (id == 3) {
      var x = document.getElementById('textcolor')
      x.style.marginTop = '0px'
      this.margintop = '0px'
    }

    }

  htmlcode(){
    var x = document.getElementById('footeractive')
    x.style.height='73px'
    this.htmlactive=true
    this.textstyleactive = false
    this.videoactive = false
    this.Imagupload = false
    this.Imagupload1 = false
    this.MOVEON = false
    this.textstyleactive1=false
  }

  TextEdit() {
    var x = document.getElementById('footeractive')
    x.style.height = '115px'
    this.imagestyleactive1=false
    this.htmlactive=false
    this.textstyleactive = true
    this.videoactive = false
    this.Imagupload = false
    this.Imagupload1 = false
    this.MOVEON = true

  }


  UploadVideoFromGallery() {
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

      }
    )
  } 

  upload(blob:Blob) {
  }

  videoupload(){
    this.Imagupload1=false
    var x = document.getElementById('footeractive')
    x.style.height = '73px'
    this.textstyleactive=false
    this.Imagupload=false
    this.MOVEON1 = true
    this.MOVEON = false
    this.Imagupload = false
    this.videoactive = true
    this.imagestyleactive1 = false
    this.textstyleactive1 = false
    this.htmlactive=false
  }

  scaleimage() {
    this.countscaleimg++
    if (this.countscaleimg % 2 != 0) {
      var x = document.getElementById('imagestyle')
      x.style.transform = 'scale(1,1.5)'
      var y = document.getElementById('textrotate')
      y.style.height = '246px'
      var z = document.getElementById('imageeditbox')
      z.style.top = '17px'
      this.scaleimageparam=1

    }
    else {
      var x = document.getElementById('imagestyle')
      x.style.transform = 'scale(1,1)'
      var y = document.getElementById('textrotate')
      y.style.height = '189px'
      var z = document.getElementById('imageeditbox')
      z.style.top='49px'
      this.scaleimageparam=0
      }
    }

  deleteimg(){
    this.imgactive =false
  }

  picture() {
    this.MOVEON = false
    this.Imagupload = true

  }

  ImageUpload() {
    this.htmlactive = false
    this.imagestyleactive1=false
    this.Imagupload1 = true
    this.textstyleactive1 = false
    var x = document.getElementById('footeractive')
    x.style.height = '73px'
    this.textstyleactive=false
    this.imgactive=true
    this.Imagupload = true
    this.MOVEON = false
    this.videoactive = false
    let actionsheet = this.actionsheetCtrl.create({
      title: 'Image Upload!',
      buttons: [{
        text: 'Upload From Gallery',
        handler: () => {
        this.flagcamera = 1
    this.gallery()
        },
      }
        ,
      {
        text: 'Take A Snap',
        handler: () => {
          this.flagcamera = 1
         this.camera1()
        }
      }]

    })
    actionsheet.present();
  }

  camera1() {
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
    }, (err) => {
    })
  }
  

  scale(){
this.count5++
if(this.count5%2!=0){
  var x = document.getElementById('textcolor')
  this.scaleon = true


  }
  else{
  var x = document.getElementById('textcolor')
 
   this.scaleon = false
  }
  }

imapctstyle(){
  this.fontfamilytext='Impact'
  this.font=this.fontfamilytext
  var x=document.getElementById('textcolor')
   x.style.fontFamily='Impact'
}

Verdanastyle()
{
  this.fontfamilytext='Verdana'
  this.font=this.fontfamilytext
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Verdana'
}

timenewroman()
{
  this.fontfamilytext='Times New Roman'
  this.font=this.fontfamilytext
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Times New Roman'
}

Georgia(){
  this.fontfamilytext='Georgia'
  this.font=this.fontfamilytext
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Georgia'
}

Arial()
{
  this.fontfamilytext='Arial'
  this.font=this.fontfamilytext
 var x=document.getElementById('textcolor')
  x.style.fontFamily='Arial' 
}
Lucidaconsole()
{
  this.fontfamilytext='Lucida Console'
  this.font=this.fontfamilytext
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Lucida Console'
}

openFontStyle()
{
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


moveon() {
  	this.count++
 
        if (this.count % 2 == 0) {
          var x = document.getElementById('footeractive')
          x.style.height = '115px'
          this.textstyleactive = true
          this.textstyleactive1=false
          this.MOVEON = true
 }
 else {
          var x = document.getElementById('footeractive')
          x.style.height = '115px'
          this.textstyleactive = false
          this.textstyleactive1 = true
          this.MOVEON = true
        
console.log('hi'+this.textedit)
 	
 }
  }

  moveonimage() {
    this.countimage++

    if (this.countimage % 2 == 0) {
      this.Imagupload1 = true
      this.Imagupload = true
   
    }
    else {
      this.imagestyleactive1 = true
      var x = document.getElementById('footeractive')
      x.style.height = '115px'
   
      this.Imagupload1 = true
      this.Imagupload = false
      console.log('hi' + this.textedit)

    }
  }


  rotateon(){
    this.count1++
    if(this.count1%4==1){
     
var x=document.getElementById('textrotate')
      x.style.transform = 'rotate(90deg)'
      this.rotatebox = x.style.transform

  }
  else if(this.count1%4==2){
  
   var x=document.getElementById('textrotate')
   x.style.transform='rotate(180deg)' 
   this.rotatebox = x.style.transform

    }
  else if(this.count1%4==3){
  
   var x=document.getElementById('textrotate')
   x.style.transform='rotate(270deg)' 
   this.rotatebox = x.style.transform

    }
else if(this.count1%4==0){
   
   var x=document.getElementById('textrotate')
   x.style.transform='rotate(360deg)' 
   this.rotatebox = x.style.transform

    }

  }

  delete() {
    this.navCtrl.setRoot(GenericPage)
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


  textsmall(){
  this.count4++
  if(this.count4%2!=0)
  {
      var x=document.getElementById('textcolor')
      x.style.fontSize = "xx-small";
      this.fontsize = x.style.fontSize
  }
  else{
   var x=document.getElementById('textcolor')
      x.style.fontSize = "1.4rem"; 
      this.fontsize = x.style.fontSize
  }
  }
  
textoblique(){
  this.count3++
if(this.count3%2!=0){
    var x=document.getElementById('textcolor')
    x.style.fontStyle = "italic";
    this.fontstyle = x.style.fontStyle
    }
     else{
         var x=document.getElementById('textcolor')
         x.style.fontStyle = "normal";
         this.fontstyle = x.style.fontStyle
     }
}

textbold(){
this.count5++
if(this.count5%2!=0){
  var x=document.getElementById('textcolor')
  x.style.fontWeight = "900";
  this.fontweight = x.style.fontWeight
}
else{
var x=document.getElementById('textcolor')
x.style.fontWeight = "400";
this.fontweight = x.style.fontWeight
}
}

textleft(){
 var x=document.getElementById('textcolor')
 x.style.textAlign = "start"
 this.textalign = x.style.textAlign
}

textcenter(){
  var x = document.getElementById('textcolor')
  x.style.textAlign = 'center'
  this.textalign = x.style.textAlign
}

textright(){
  var x = document.getElementById('textcolor')
  x.style.textAlign = 'end'
  this.textalign = x.style.textAlign
}


  func(id){
    var x=document.getElementById('textcolor')
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

  navigateToLibrary() {
    this.navCtrl.setRoot(LibraryPage)
  }

  navigateToYourAD() {
    this.navCtrl.setRoot(YourAdPage);
  }

  dataURItoBlob() {
  (<any>window).resolveLocalFileSystemURL(this.videodata, (result) => {
    this.nativepath = result;
    this.readimage();
})
}

readimage() {    
    (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg'});
          //do what you want to do with the file
        }
      })
    })
  }

uploadvideo(){
    var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': token1 })
  let requestOptions = new RequestOptions({ headers: headers })
  const filetransfers:FileTransferObject=this.filetransfer.create();
let options:FileUploadOptions={
  fileKey:'file',
  fileName:'filename.mp4',
  chunkedMode: false,
  mimeType: "video/mp4",
  headers: headers,
  httpMethod: 'POST'

}
  filetransfers.onProgress((e) => {
  let prg = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
  this.loadProgress=prg

});

filetransfers.upload(this.videodata,'http://stats.didws.com:10001/uploadAdFile', options)
   .then((data) => {    
   }, (err) => {
   })
}

uploadvideosecond(){
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
      this.flagcamera=2
      this.choosemode = 3
      this.gettext()

    }, (err) => {
    })
}

loadvideo() {
}
 

previewhtml() {
  var inputHtml = (<HTMLInputElement>document.getElementById('myTextarea')).value
   this.savedhtml = inputHtml
  let modal = this.modalcontroller.create(HtmlpreviewPage, { html: inputHtml })
   modal.present()
  }


  savecode(){
    var inputHtml = (<HTMLInputElement>document.getElementById('myTextarea')).value
     this.savedhtml = inputHtml
    this.Image_Video.push({ 'url': this.savedhtml, ' x_percent': this.xcoordinates, 'y_percent': this.ycoordinates, 'width_percent': 86, 'height_percent': this.boxheight })
    this.flagcamera = 4
    this.gettext()
  }


  
 uploadImagesecond(){
 
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


  filetransfers.onProgress((e) => {
      this._zone.run(() => {
      this.loadProgress = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
    })
  });

  filetransfers.upload(this.imgsrc,'http://stats.didws.com:10001/uploadAdFileBlob?originalFileName=filename.jpg', options)
    .then((data) => {
       this.imageafterupload = JSON.parse(data.response).url
        this.gettext()
    }, (err) => {
    })
}



}

