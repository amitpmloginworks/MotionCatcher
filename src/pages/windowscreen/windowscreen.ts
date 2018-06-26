import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ActionSheetController,ToastController  } from 'ionic-angular';
import { Chart } from 'chart.js';
import{TextImageEditorPage}from'../text-image-editor/text-image-editor'
import {AddvenuePage} from '../addvenue/addvenue';
import {AddscreensPage} from '../addscreens/addscreens';
import {CreateAdPage} from '../create-ad/create-ad';
import{Observable}from'rxjs/Rx'
import{SecurityProvider}from'../../providers/security/security'
import {WelcomePage } from '../welcome/welcome';
import{LibraryPage}from'../library/library'
import { unescapeIdentifier } from '@angular/compiler';
import { empty } from 'rxjs/Observer';
/**
 * Generated class for the WindowscreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-windowscreen',
  templateUrl: 'windowscreen.html'

})
export class WindowscreenPage {
    @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas1') doughnutCanvas1;
  
  
  lineChart: any;
  doughnutChart:any
  barChart:any
  doughnutChart1:any
    arraycoordinatesdata=[]
    arraycoordinatesdatademo=[]
    arraymalestotal=[]
    arrayfemalestotal=[]
    arraypeopletotal=[]
   otherpeopledata=[]
    hoursdata=[]
    dates=[]
    hoursimpression=[]
    countothers
    datalength
    statsdate=null
    listdeviceid=[]
    unitdetails
    count=0
    date
    selectedunitId
    TYPE
   availablehours=[]
   impressionhours=[]
   statshour=0
  xhour
  attention
  duration
  impressions
  faceexpression
  faceon:boolean
  impressionsdata=[]
  morningcount
  middaycount
  afternooncount
  eveningcount
randomid
brandname
female1
male1
others1
female2
male2
others2

childern=0
adults=0
youngadults=0
seniors=0
totaldata=0
others
childern1
adults1
youngadults1
seniors1
others11
numberofads
schdeulingdata=[]
countad=1
dubliacte=null
myaRRAY=[]
windowactive:boolean
impressiondatamales=[]
impressiondatafemales=[]
impressionhoursdata=[]
impressioneverbodydata=[]

Adperformancedata=[]

testmales=0
tesfemales=0
testothers=0
adname
facediv
constructor(public toastCtrl: ToastController,public actionSheetCtrl: ActionSheetController,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams,public security:SecurityProvider) {
  this.facediv=false
    this.windowactive=false
    let loading=this.loadingCtrl.create({content:'wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    
        .flatMap(() => this.security.DeviceandVenuenetwork())
        .subscribe(data=>{
            loading.dismiss()
            console.log(data)
         
             this.unitdetails=data
          
             this.numberofads=data.length
           
            
        })
         
       
  }



  stackedbar(){
   




this.impressiondatamales.length=0
this.impressiondatafemales.length=0
this.impressioneverbodydata.length=0
this.impressionhoursdata.length=0

   for(var i=0;i<this.xhour.length;i++){
    
    this.impressiondatamales.push(this.xhour[i].statsScreen.malesTotal.viewers.people) 
    this.impressiondatafemales.push(this.xhour[i].statsScreen.femalesTotal.viewers.people)    
     this.impressioneverbodydata.push({'x':this.xhour[i].hour,'y':this.xhour[i].statsScreen.everybody.viewers.people})
    this.impressionhoursdata.push(this.xhour[i].hour) 
   
}
    
  var chart = new Chart(this.lineCanvas.nativeElement, {
        type: 'bar',
        data:{
            labels:this.impressionhoursdata,
            datasets:[
               {
           
             data:this.impressiondatamales,
             backgroundColor:'#C0E2F7'
            },
            
            
                {
                 
                    data: this.impressiondatafemales,
                    backgroundColor: '#E5BED8' 
                  },
                {
                
      
          data: this.impressioneverbodydata,
          
          type: 'line',
                       lineTension: 0.1,
                        backgroundColor: "#DBEBF6",
                        borderColor: "#ED906B",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "#ffff",
                        pointBackgroundColor: "#ED906B",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 2
                }
            ]
        },options: {
           
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }]
            },
            legend: {
                display: false,
            },
          }
        
     }); 
     chart.update();
  }


  taptoschedule(i)

  {
    let actionSheet = this.actionSheetCtrl.create({
        title: 'Scheduling',
        buttons: [
          {
            text: this.brandname[i].schedulingCms.schedulingCms[0].Fromdays+' to '+this.brandname[i].schedulingCms.schedulingCms[0].todays ,
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text:this.brandname[i].schedulingCms.schedulingCms[0].fromdate,
            handler: () => {
              console.log('Archive clicked');
            }
          
          }
        ]
      });
      actionSheet.present();
    }
  

  campaigndetails()
  {
this.schdeulingdata.length=0

    let loading=this.loadingCtrl.create({content:'wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    
        .flatMap(() => this.security.UCCms(this.selectedunitId,this.randomid))
        .subscribe(data=>{
            loading.dismiss()
            console.log(data)
          this.brandname=data
          for(var i=0;i<data.length;i++){
                     this.dubliacte=this.randomid

  this.schdeulingdata.push({'FromTime':data[i].schedulingCms.schedulingCms[0].fromTime,
'ToTime':data[i].schedulingCms.schedulingCms[0].toTime,
'brand':data[i].brand,
'adId':data[i].adId

})
       
          }
        })
    
  
    }
 




  tapunitid(i,deviceid)
  {
      
   
    const toast = this.toastCtrl.create({
        message: 'Selected '+ deviceid,
        duration: 2000,
        position: 'bottom'

      })
      toast.present()
   




      this.selectedunitId=this.unitdetails[i].unitId 
       this.randomid=this.unitdetails[i].randomId
      

      
    




}
statsdetail()
{

let loading=this.loadingCtrl.create({content:'wait..'})
Observable.of(loading).flatMap(loading=>loading.present())
.flatMap(()=>this.security.getstatsdata(this.date,this.selectedunitId,this.TYPE))
.subscribe((data)=>{
    loading.dismiss()
    console.log('hi'+data)

if(data==undefined)
{
alert('Data is empty')
}
else{
this.xhour=data

for(var i=0;i<data.length;i++)
{
    
this.availablehours.push({'hours':data[i].hour})



}
this.screenperformance()
} 
})
}
  
  



navigateToAddVenue(){
  this.navCtrl.push(AddvenuePage);
}

navigateToAddScreens(){
this.navCtrl.push(AddscreensPage);
}
navigateToCreateAD(){
this.navCtrl.push(WelcomePage)
}
screenperformance() {
    
    this.windowactive=true
   this.stackedbar()

  this.barchartanalyze1();
  this.barchartanalyze();

  this.campaigndetails();
var testmales=0
var testfemales=0
var testothers=0
var male1=0
var female1=0
var others1=0
   for(var i=0;i<this.xhour.length;i++)
{
testmales=this.xhour[i].statsScreen.malesTotal.viewers.people+testmales
testfemales=this.xhour[i].statsScreen.femalesTotal.viewers.people+testfemales
testothers=this.xhour[i].statsScreen.everybody.viewers.people+testothers


}

male1=(testmales/testothers)*100
female1=(testfemales/testothers)*100
others1=((testothers-testmales-testfemales)/testothers)*100
this.male2=Math.round(male1)
this.female2=Math.round(female1)
this.others2=Math.round(others1)

this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
    type: 'pie',
     
    data: {
        
        datasets: [{
            label: '# of Votes',
data: [male1
,female1,
others1
],
            backgroundColor: [
                '#4FBCCD',
                '#E7639A',
                '#4D4D4C',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
           
        }]}
        ,options: {
                 responsive: false,
                 tooltips: {
                    enabled: false
                  }
              }
 
});





    



   
}
tapdatelist()
{

    



     
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
        type: 'pie',
        data: {
            labels: ["Female", "Male", "Others"],
            datasets: [{
                label: '# of Votes',
 data: [(this.xhour[this.statshour].statsScreen.malesTotal.viewers.people/this.xhour[this.statshour].statsScreen.everybody.viewers.people)*100
 ,(this.xhour[this.statshour].statsScreen.femalesTotal.viewers.people/this.xhour[this.statshour].statsScreen.everybody.viewers.people)*100 ,
 ((this.xhour[this.statshour].statsScreen.everybody.viewers.people-this.xhour[this.statshour].statsScreen.malesTotal.viewers.people-this.xhour[this.statshour].statsScreen.femalesTotal.viewers.people)/this.xhour[this.statshour].statsScreen.everybody.viewers.people)*100
 ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ] 
               
            }]
        }

    });
     
}
showadperformance()
{



var count=0


for(var i=0;i<this.xhour.length;i++){
  count++
}


}

tapbarchart()
{

if(this.xhour.length==0)
{
    this.morningcount=0
    this.middaycount=0
    this.afternooncount=0
    this.eveningcount=0


}

else{
this.impressionhours.length=0
    for(var i=0;i<this.xhour.length;i++)
    {
        
    this.impressionhours.push({'hours':this.xhour[i].hour})
    
    
       

 if( this.impressionhours[i].hours>=6&&this.impressionhours[i].hours<12)
{

    

    if(this.xhour[i].statsScreen.everybody!=null) {
       
         this.morningcount=+this.xhour[i].statsScreen.everybody.viewers.people
        
    }
    else{
        


    }



 

}

else if(this.impressionhours[i].hours>=12&&this.impressionhours[i].hours<14)
{ 
  
    if(this.xhour[i].statsScreen.everybody!=null) {
     
         this.middaycount=+this.xhour[i].statsScreen.everybody.viewers.people
    
    }
    else{
        


    }
}

else if(this.impressionhours[i].hours>=14&&this.impressionhours[i].hours<18)
{
    
    if(this.xhour[i].statsScreen.everybody!=null) {
      
         this.afternooncount=+this.xhour[i].statsScreen.everybody.viewers.people
        
    }
    else{
        

    }
}
else if(this.impressionhours[i].hours>=18&&this.impressionhours[i].hours<23)
{
   
    if(this.xhour[i].statsScreen.everybody!=null) {
        
         this.eveningcount=+this.xhour[i].statsScreen.everybody.viewers.people
        
    }
    else{
        


    }
    
}










else{
  
}

    
    }
}

}

barchartanalyze()
{
    this.tapbarchart()
    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["", "", "", ""],
                datasets: [{
                    label: '# of TimeHour',
                    data: [this.morningcount,this.middaycount,this.afternooncount,this.eveningcount],
                    backgroundColor: [
                        '#F7C870',
                        '#EB7F59',
                        '#A5C35C',
                        '#C87CAD',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
    
        });  
}


barchartanalyze1()
{
var childern=0
var youngadults=0
var adults=0
var seniors=0
var totaldata=0
var others=0

for(var i=0;i<this.xhour.length;i++)
{


    childern=this.xhour[i].statsScreen.everybody.viewers.children+childern
    youngadults=this.xhour[i].statsScreen.everybody.viewers.youngAdults+youngadults
    adults=this.xhour[i].statsScreen.everybody.viewers.adults+adults
    seniors=this.xhour[i].statsScreen.everybody.viewers.seniors+seniors   
    totaldata=this.xhour[i].statsScreen.everybody.viewers.people+totaldata 
   

}

others=(totaldata-adults-youngadults-childern-seniors)



this.childern1=Math.round(childern)
this.youngadults1=Math.round(youngadults)
this.adults1=Math.round(adults)
this.seniors1=Math.round(seniors)
this.others11=Math.round(others)

    this.doughnutChart1 = new Chart(this.doughnutCanvas1.nativeElement, {
 
        type: 'pie',
         
        data: {
           
            datasets: [{
                label: '# of Votes',
    data: [childern
    ,youngadults,
    adults,
    seniors,
    others
    ],
                backgroundColor: [
                    '#84CAC8',
                    '#7FBD72',
                    '#EDD33A',
                    '#F3AC2F',
                    '#4D4D4C',
                    'rgba(255, 159, 64, 0.2)'
                    ]    
            }]}
            ,options: {
                     responsive: false,
                     tooltips: {
                        enabled: false
                      }
                  }
      
    
    });


 
}


taptolibrary(adid)
{

for(var i=0;i<this.xhour.length;i++)
{
this.testmales=this.xhour[i].statsScreen.malesTotal.viewers.people+this.testmales
this.tesfemales=this.xhour[i].statsScreen.femalesTotal.viewers.people+this.tesfemales
this.testothers=this.xhour[i].statsScreen.everybody.viewers.people+this.testothers


}

this.male1=(this.testmales/this.testothers)*100
this.female1=(this.tesfemales/this.testothers)*100
this.others1=((this.testothers-this.testmales-this.tesfemales)/this.testothers)*100
// 

var editAd=true

localStorage['updateadId']=adid
var choosemodescreen=1
this.navCtrl.setRoot(TextImageEditorPage,{'adId':adid,
'editAd':editAd,
'choosemodescreen':choosemodescreen

})

}

testp()
{
    let loading=this.loadingCtrl.create({content:'wait..'})
    Observable.of(loading).flatMap(loading=>loading.present())
    .flatMap(()=>this.security.adperformance(this.date,this.selectedunitId))
    .subscribe((data)=>{
        loading.dismiss()
      console.log('data contains'+data)
if(data.performance!=empty)
{
if(data.performance.length==0)
{
    this.adname=0
    this.attention=0
    this.duration=0
    this.impressions=0 
    this.facediv=true



}


else{
    this.facediv=false
    this.adname=data.performance[0].name
    this.attention=data.performance[0].attention
    this.duration=data.performance[0].duration
    this.impressions=data.performance[0].impressions 
    this.faceon=data.performance[0].smile
 

}



}





    })
}

}
