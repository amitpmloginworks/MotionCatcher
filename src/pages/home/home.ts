import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ActionSheetController}from'ionic-angular'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
MOVEON:boolean
textedit
count=0
count1=0
count2=0
count3=0
count4=0
count5=0
count6=0
rotate
rotate1
rotate2
rotate3
rotate4
hope
colorboard
textcolor1
fontfamilytext
  constructor(public navCtrl: NavController,public actionsheetCtrl:ActionSheetController) {
this.MOVEON=false
this.textedit
  this.colorboard=false
  this.fontfamilytext='Arial'
  }


  scale(){ 
this.count5++
if(this.count5%2!=0){
  var x=document.getElementById('textcolor')
   x.style.marginTop='74px' 
   x.style.transform='scale(1,3)' 
  }
  else{
   var x=document.getElementById('textcolor')
   x.style.marginTop='0px' 
   x.style.transform='scale(1,1)' 
  }
  }

imapctstyle(){
  this.fontfamilytext='Impact'
  var x=document.getElementById('textcolor')
   x.style.fontFamily='Impact'
}
Verdanastyle(){
  this.fontfamilytext='Verdana'
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Verdana'
}

timenewroman(){
  this.fontfamilytext='Times New Roman'
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Times New Roman'
}

Georgia(){
  this.fontfamilytext='Georgia'
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Georgia'
}

Arial(){ 
  this.fontfamilytext='Arial'
 var x=document.getElementById('textcolor')
  x.style.fontFamily='Arial' 
}

Lucidaconsole(){
  this.fontfamilytext='Lucida Console'
  var x=document.getElementById('textcolor')
  x.style.fontFamily='Lucida Console'
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
  moveon(){
  	this.count++
 
  	if(this.count%2==0){
  	this.MOVEON=false
 }
 else 
 {
this.MOVEON=true
console.log('hi'+this.textedit)
 	
 }

  }

  rotateon(){
    this.count1++
    if(this.count1%4==1){
var x=document.getElementById('textrotate')
x.style.transform='rotate(90deg)'
  }
  else if(this.count1%4==2){ 
   var x=document.getElementById('textrotate')
   x.style.transform='rotate(180deg)' 
  }
  else if(this.count1%4==3){
   var x=document.getElementById('textrotate')
   x.style.transform='rotate(270deg)' 
  }
else if(this.count1%4==0){ 
   var x=document.getElementById('textrotate')
   x.style.transform='rotate(360deg)' 
  }
  }


  delete(){
   this.textedit=''
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
  }
  else{
   var x=document.getElementById('textcolor')
      x.style.fontSize = "1.4rem"; 
  }
  }
  
textoblique(){
  this.count3++
if(this.count3%2!=0){
    var x=document.getElementById('textcolor')
    x.style.fontStyle = "italic";
    }
     else{
         var x=document.getElementById('textcolor')
    x.style.fontStyle = "normal";
     }
}

textbold(){
this.count5++
if(this.count5%2!=0){
  var x=document.getElementById('textcolor')
  x.style.fontWeight = "900";

}
else{
var x=document.getElementById('textcolor')
  x.style.fontWeight = "400";  
}
}

textleft(){
 var x=document.getElementById('textcolor')
  x.style.marginLeft="0px"
}


textcenter(){
 var x=document.getElementById('textcolor')
  x.style.marginLeft='100px'
}

textright(){
 var x=document.getElementById('textcolor')
  x.style.marginLeft="224px"
}


  func(id){
    var x=document.getElementById('textcolor')
    var y=document.getElementById('colorbox')
     if (id == 0) {
            x.style.color = "#6F983A"
            y.style.backgroundColor='#6F983A'

        } else if (id == 1) {
            x.style.color = "#0F8EFC"
            y.style.backgroundColor='#0F8EFC'

        } else if (id == 2) {
            x.style.color = "#2D3192"
           y.style.backgroundColor='#2D3192'
        } else if (id == 3) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'

        } else if (id == 4) {

            x.style.color = "#1B1464"
            y.style.backgroundColor='#1B1464'

        } else if (id == 5) {

            x.style.color = "#003664"
            y.style.backgroundColor='#003664'
        } else if (id == 6) {

            x.style.color = "#AED700"
            y.style.backgroundColor='#AED700'
        } else if (id == 7) {

            x.style.color = "#7DA7D9"
            y.style.backgroundColor='#7DA7D9'
        } else if (id == 8) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
        } else if (id == 9) {

            x.style.color = "#A1410E"
            y.style.backgroundColor='#A1410E'
        } else if (id == 10) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
        } else if (id == 11) {

            x.style.color = "#A1410E"
            y.style.backgroundColor='#A1410E'
        } else if (id == 12) {

            x.style.color = "#9DA2A7"
            y.style.backgroundColor='#9DA2A7'
        } else if (id == 13) {

            x.style.color = "#F36523"
            y.style.backgroundColor='#F36523'
        } else if (id == 14) {

            x.style.color = "#FCAF5D"
            y.style.backgroundColor='#FCAF5D'
        } else if (id == 15) {

            x.style.color = "#FDC78B"
            y.style.backgroundColor='#FDC78B'
        } else if (id == 16) {

            x.style.color = "#FEF89A"
            y.style.backgroundColor='#FEF89A'
        } else if (id == 17) {

            x.style.color = "#817B00"
            y.style.backgroundColor='#817B00'
        } else if (id == 18) {

            x.style.color = "#F79578"
            y.style.backgroundColor='#F79578'
        } else if (id == 19) {

            x.style.color = "#FEF200"
            y.style.backgroundColor='#FEF200'
        } else if (id == 20) {

            x.style.color = "#015B7E"
            y.style.backgroundColor='#015B7E'
        } else if (id == 21) {

            x.style.color = "#7B2E00"
            y.style.backgroundColor='#7B2E00'
        } else if (id == 22) {

            x.style.color = "#000000"
            y.style.backgroundColor='#000000'
        } else if (id == 23) {

            x.style.color = "#111111"
            y.style.backgroundColor='#111111'
        } else if (id == 24) {

            x.style.color = "#FCAF5D"
            y.style.backgroundColor='#FCAF5D'
        } else if (id == 25) {

            x.style.color = "#005826"
            y.style.backgroundColor='#005826'
        } else if (id == 26) {

            x.style.color = "#FEF89A"
            y.style.backgroundColor='#FEF89A'
        } else if (id == 27) {

            x.style.color = "#007237"
            y.style.backgroundColor='#007237'
        } else if (id == 28) {

            x.style.color = "#F79578"
            y.style.backgroundColor='#F79578'
        } else if (id == 29) {
            x.style.color = "#00A650"
            y.style.backgroundColor='#00A650'

        }
   
  }
  
}
