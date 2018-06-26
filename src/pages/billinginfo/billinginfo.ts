import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ToastController } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io'
import { MenuPage } from '../menu/menu';
import { Welcome2Page} from'../welcome2/welcome2'
import { SecurityProvider } from '../../providers/security/security'
import { Observable } from 'rxjs/Rx'

//declare var CardIO
/**
 * Generated class for the BillinginfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billinginfo',
  templateUrl: 'billinginfo.html',
})
export class BillinginfoPage {
  token
  unitId
  networkId
  company
  address
  city
  country
  pinCode
  cardNumber
  myDate=null
  cvc
  cardObj
  cardHolderName
  cvv
  redactedCardNumber
  expiryMonth
  expiryYear
  postalCode
  maxDate="2600-07-10"
  minDate="2016-08-10"
  loadingcontrol:boolean
month
year
date
  constructor(public toastCtrl:ToastController,public cardIO:CardIO,public security: SecurityProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
   
     let loading = this.loadingCtrl.create({ content: 'wait..' })
      Observable.of(loading).flatMap(loading => loading.present())
        .flatMap(() => this.security.creditInfo())
        .subscribe(data => {
          loading.dismiss()
         this.company=data.name 
         this.address=data.address
         this.city=data.city 
         this.country=data.country
         this.pinCode=data.zipCode 
    
     if(data.month!=null)
     {
        this.myDate=data.month+'/'+data.year
     }  
        
   })
    
  }

  hope(){

    this.cardIO.canScan()
      .then(
  
      (res: boolean) => {
        if (res) {
          let options = {
           requireCardholderName: true,
         requireExpiry: true,
         requireCCV: true,
            requirePostalCode: true,
            scanInstructions: "Scan the front of your card",
            scanExpiry: true,
            scanCardHolderName: true,
            guideColor: '#12be76',
            hideCardIOLogo: true
          };
          this.cardIO.scan(options).then((data) => {
            this.setCardData(data);
          }, err => {
            console.log(err);
          });
        }     
      }
    ).catch(function (error) {
      alert(JSON.stringify(error))
   })
  } 

setCardData(data: any) {
    this.cardObj = data;
    this.cardHolderName = data.cardholderName;
    this.cvc = data.cvv;
    this.redactedCardNumber = data.redactedCardNumber;
    this.cardNumber = data.cardNumber;

    // Nothing happening here apparently?
    this.expiryMonth =  data.expiryMonth;
    this.expiryYear = data.expiryYear;
    this.pinCode = data.postalCode;
    this.myDate=this.expiryMonth+'/'+this.expiryYear
    
  }

  ionViewDidLoad() {
      
  }


  navigateToDashboard() {

  if(this.company==null){
 let toast=this.toastCtrl.create({
  message:'Please fill the details',
  position:'Bottom',
  duration:2000
 })
toast.present()
}
else if(this.address==null)
{
 let toast=this.toastCtrl.create({
  message:'Please fill  the details',
  position:'Bottom',
  duration:2000
 })
toast.present()
}
else if(this.city==null)
{
 let toast=this.toastCtrl.create({
  message:'Please fill  the details',
  position:'Bottom',
  duration:2000
 })
toast.present()
}
else if(this.country==null)
{
let toast=this.toastCtrl.create({
  message:'Please fill  the details',
  position:'Bottom',
  duration:2000
 })
toast.present()
}
else if(this.pinCode==null)
{
let toast=this.toastCtrl.create({
  message:'Please fill  the details',
  position:'Bottom',
  duration:2000
 })
toast.present()
}
else if(this.cardNumber==null)
{
let toast=this.toastCtrl.create({
  message:'Please fill  the details',
  position:'Bottom',
  duration:2000
 })
toast.present()
}

else{
    this.month = this.myDate.slice(5, 8);
    this.year = this.myDate.slice(0, 4);
   
  this.loadingcontrol=true
  let loading=this.loadingcontrol
    Observable.of(loading)
      .flatMap(() => this.security.billinginfo(this.company, this.address, this.city, this.country, this.pinCode, this.cardNumber, this.month, this.year, this.cvc))
      .subscribe((data) => {
        this.loadingcontrol=false
        this.navCtrl.push(MenuPage);
       })  
}
  
  }
  















}
