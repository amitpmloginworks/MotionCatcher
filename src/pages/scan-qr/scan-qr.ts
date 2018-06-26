import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController,LoadingController ,ToastController} from 'ionic-angular';
import { AddscreensPage } from '../addscreens/addscreens';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'

/**
 * Generated class for the ScanQrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html',
})
export class ScanQrPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  qrcodescan
datashow
  constructor(public toastCtrl:ToastController,public security:SecurityProvider,public loadingCtrl:LoadingController,private barcodeScanner: BarcodeScanner,private camera: Camera,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanQrPage');
  }
navigateToAddScreens(){
  if(this.datashow!=null)
  {
  
  this.navCtrl.push(AddscreensPage,{datashow:this.datashow});
  }
  else{
  let toast=this.toastCtrl.create({
    duration:3000,
    message:'Screen not scanned!'
  })
  toast.present()
  
  }
}


cameratap(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
  });
}
  
createCode() {
  this.createdCode = this.qrData;
}

scanCode() {
  this.barcodeScanner.scan().then(barcodeData => {   
    this.scannedCode = barcodeData.text;
    this.sendQrCode(this.scannedCode)
  }, (err) => {
    console.log('Error: ', err);
  });
}

sendQrCode(scannedCode){
let loading=this.loadingCtrl.create({content:'wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.qrcodesend(scannedCode))
.subscribe(data=>{
  loading.dismiss()
 if(data.unitId!=null){
  localStorage['unitId']=data.unitId
  this.infohtml(data.unitId)

}
}) 
}

infohtml(UnitId){
  let loading=this.loadingCtrl.create({content:'wait..'})
  Observable.of(loading).flatMap(loading=>loading.present())
  .flatMap(()=>this.security.infoqrcode(UnitId))
  .subscribe(data=>{
    loading.dismiss()
console.log('be happy'+data);
  this.datashow=data
if(this.datashow!=null)
{
let toast=this.toastCtrl.create({
  duration:3000,
  message:'Screen Scanned Succesfully'
})
toast.present()
}
else{
let toast=this.toastCtrl.create({
  duration:3000,
  message:'Please Try Again!'
})
toast.present()
}
  })
}



}
