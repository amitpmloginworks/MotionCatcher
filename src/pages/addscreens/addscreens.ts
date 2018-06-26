import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import{Observable}from'rxjs/Rx'
import {FinishPage} from '../finish/finish';
import{SecurityProvider}from'../../providers/security/security'
/**
 * Generated class for the AddscreensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addscreens',
  templateUrl: 'addscreens.html',
})
export class AddscreensPage {
datashow
venuenamelistdata
venuelist
addName
  constructor(public toastCtrl:ToastController,public security:SecurityProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
 let loading=this.loadingCtrl.create({content:'Please Wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.getVenueList())
.subscribe(data=>{
loading.dismiss()
	console.log('addscreens'+data)
	this.venuenamelistdata=data
	this.registerVenue()
})
 this.datashow=this.navParams.get('datashow')
  }
  registerVenue(){
	}
	
networkdevice(){

	let loading=this.loadingCtrl.create({content:'Please Wait..'})
	Observable.of(loading).flatMap(loading=>loading.present())
	.flatMap(()=>this.security.devicenetwork())
	.subscribe(data=>{
		loading.dismiss()
	})
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddscreensPage');
	}
	
navigateToFinishScreen(){  

if(this.addName==null)
{
	alert('Please add the Name')
}
else{

	let loading=this.loadingCtrl.create({content:'Please Wait..'})
	Observable.of(loading).flatMap(loading=>loading.present())
	.flatMap(()=>this.security.regitserDeviceInVenue(this.addName))
	.subscribe(data=>{
		loading.dismiss()
		this.networkdevice()
    let toast=this.toastCtrl.create({
    	duration:3000,
    	message:'Sucessfully addded'
    })
    toast.present()
    this.navCtrl.push(FinishPage)
	})
}
}

}
