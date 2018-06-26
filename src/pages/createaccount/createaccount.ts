import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { BillinginfoPage} from '../billinginfo/billinginfo';
import{SecurityProvider}from'../../providers/security/security'
import{Observable}from'rxjs/Rx'
import{FormBuilder,FormGroup,Validators}from'@angular/forms'
import { FormControl, AbstractControl } from '@angular/forms'
declare var jsSHA
@IonicPage()
@Component({
  selector: 'page-createaccount',
  templateUrl: 'createaccount.html',
})
export class CreateaccountPage {
	email
firstName
middleName
lastName
pwHash
  networkName
confirmingpassword
  motionform: FormGroup
  token
  qrcode
  firstname
  constructor(public toastCtrl:ToastController,public formbuilder:FormBuilder,public loadinCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public security:SecurityProvider) {
let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;

this.motionform=formbuilder.group({
email:['',Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
firstName:['',Validators.compose([Validators.maxLength(20) ])],
lastName:['',Validators.compose([Validators.maxLength(20)])] ,
pwHash:['',Validators.compose([Validators.maxLength(30), Validators.pattern(passwordRegex), Validators.required])],
networkName:['',Validators.compose([Validators.maxLength(10)])],
confirmPassword:['', Validators.required]
}
, {
      validator: CreateaccountPage.MatchPassword // your validation method
    })
  
   
 
  }
  static MatchPassword(AC: AbstractControl) {
       let password = AC.get('pwHash').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateaccountPage');
  }

  navigateToBillInfo() {
   var check = this.motionform.controls["email"].value.substring(0, 1)
    if (check == check.toUpperCase()) {
      const toast = this.toastCtrl.create({
        message: 'Email First letter can not be uppercase',
        duration: 2000,
        position: 'bottom'

      })
      toast.present()
    }
    else{
    localStorage["firstname"] = this.motionform.controls["firstName"].value
let loading=this.loadinCtrl.create({content:'wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.Signup(
this.motionform.controls["email"].value,
this.motionform.controls["firstName"].value,
this.motionform.controls["lastName"].value,
this.motionform.controls["pwHash"].value,
this.motionform.controls["networkName"].value

	))
  .subscribe(data => {    
	loading.dismiss()
	if(data.error)
  {
  loading.dismiss()
const toast=this.toastCtrl.create({
  message:data.error,
  duration:2000,
  position:'bottom'
});
toast.present()
}
else{
  loading.dismiss()
  console.log(data.bearer)
  this.token = data.bearer

  const toast = this.toastCtrl.create({
    message: 'SignUp successfully',
    duration: 1000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    this.navCtrl.setRoot(LoginPage)
  });

  toast.present();
   
}
	})
}
  }


  hope() {
var check = this.motionform.controls["email"].value.substring(0, 1)
    if (check == check.toUpperCase()) {
      const toast = this.toastCtrl.create({
        message: 'Email First letter can not be uppercase',
        duration: 2000,
        position: 'bottom'

      })
      toast.present()
    }else{
  
    var user = this.motionform.controls["email"].value
    var pwd = this.motionform.controls["pwHash"].value
      var iterations = 100
      var pwdHashed = this.hashIterative(pwd, user, iterations)
      let loading = this.loadinCtrl.create({ content: 'wait..' })
      Observable.of(loading).flatMap(loading => loading.present())
        .flatMap(() => this.security.hopetestsignup(
          user,
          pwdHashed,
          this.motionform.controls["firstName"].value,
          this.motionform.controls["lastName"].value,
          this.motionform.controls["networkName"].value

        ))
        .subscribe(data => {
          loading.dismiss()
          console.log(data)
          if (data.error) {
            loading.dismiss()
            const toast = this.toastCtrl.create({
              message: data.error,
              duration: 2000,
              position: 'bottom'
            });
            toast.present()
          }
          else {

            loading.dismiss()
            console.log(data.bearer)
            this.token = data.bearer
            localStorage['token'] = JSON.stringify(this.token);
            const toast = this.toastCtrl.create({
              message: 'Login successfully',
              duration: 1000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              this.navCtrl.setRoot(LoginPage)
            });

            toast.present();

          }
        })
    }
  }
  hashIterative(password, salt, iterations) {
    var hash = this.hashOnce(btoa(salt) + "$" + password)

    for (var i = 1; i < iterations; i++) {
      hash = this.hashOnce(hash)
    }
    return hash;
  }
  hashOnce(text) {
    var shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update(text);
    return shaObj.getHash("B64");
  }

}
