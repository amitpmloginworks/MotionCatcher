import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ActionSheetController } from 'ionic-angular';
import { YourAdPage } from '../your-ad/your-ad'
import { MenuPage } from '../menu/menu'
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import { Jsonp } from '@angular/http';
import { DashboardPage } from '../dashboard/dashboard';



declare var google;
declare var window;
/**
 * Generated class for the DistributeAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distribute-ad',
  templateUrl: 'distribute-ad.html',
})
export class DistributeAdPage {
@ViewChild('distributemap') map: ElementRef;
  position
  lat
  lng
  clear
  category
  venueName
  categorydata
  latlngdata=[]
  shopsdata=[]
  screensdata=[]
  units=[]
  schedulingCms=[]
  getdata
  Venue
  screens
  fromDate
  toDate
  
  shift
  fromTime
  Fromdays
  todays
  toTime
  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams,public security:SecurityProvider,public loadingCtrl:LoadingController) {
 
     this.lat=this.navParams.get('lat')
     this.lng=this.navParams.get('lng')
    this.clear=''
    let loading = this.loadingCtrl.create({
      cssClass: 'transparent',
      spinner: 'hide',
      content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`,
     })
      Observable.of(loading).flatMap(loading => loading.present())
        .flatMap(() => this.security.DevicesInNetwork())
        .subscribe(data => {
          loading.dismiss()
   
    console.log('hii'+data.venues.length)
    for(var i=0;i<data.venues.length;i++){
     this.shopsdata.push({'shops':data.venues[i].address})
    }
         this.DeviceVenueInNetwork()
    
   })
  }










  days(){

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Days',
      buttons: [
        {
          text: 'Monday',
          handler: () => {
            this.Fromdays='Monday'
           
          }
        },
        {
          text: 'Tuesday',
          handler: () => {
            this.Fromdays='Tuesday'
          
          }
        },
        {
          text: 'Wednesday',
          role: 'cancel',
          handler: () => {
            this.Fromdays='Wednesday'
          }
        },
        {
          text: 'Thursday',
          handler: () => {
            this.Fromdays='Thursday'
          }
        },
        {
          text: 'Friday',
          handler: () => {
            this.Fromdays='Friday'
          }
        },
        {
          text: 'Saturday',
          role: 'cancel',
          handler: () => {
            this.Fromdays='Saturday'
          }
        },
          {
            text: 'Sunday',
            role: 'cancel',
            handler: () => {
              this.Fromdays='Sunday'
            }
        }
      ]
    });
 
    actionSheet.present();




  }
  
  
  atdays(){

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Days',
      buttons: [
        {
          text: 'Monday',
          handler: () => {
            this.todays='Monday'
           
          }
        },
        {
          text: 'Tuesday',
          handler: () => {
            this.todays='Tuesday'
          
          }
        },
        {
          text: 'Wednesday',
          role: 'cancel',
          handler: () => {
            this.todays='Wednesday'
          }
        },
        {
          text: 'Thursday',
          handler: () => {
            this.todays='Thursday'
          }
        },
        {
          text: 'Friday',
          handler: () => {
            this.todays='Friday'
          }
        },
        {
          text: 'Saturday',
          role: 'cancel',
          handler: () => {
            this.todays='Saturday'
          }
        },
          {
            text: 'Sunday',
            role: 'cancel',
            handler: () => {
              this.todays='Sunday'
            }
        }
      ]
    });
 
    actionSheet.present();




  }

DeviceVenueInNetwork(){

let loading = this.loadingCtrl.create({ content: 'wait..' })
      Observable.of(loading).flatMap(loading => loading.present())
        .flatMap(() => this.security.DeviceandVenuenetwork())
        .subscribe(data => {
          loading.dismiss()
    console.log(JSON.stringify(data))
         console.log(data.length)
  this.getdata=data
       this.getlatlng()          
         for(var i=0;i<data.length;i++)
         {
            // console.log(data[i].venueGpsLatitude)
            // console.log(data[i].venueGpsLongitude)
  this.latlngdata.push({lat:data[i].venueGpsLatitude,lng:data[i].venueGpsLongitude})
 this.screensdata.push({venueAddress:data[i].venueAddress,
  unitId:data[i].unitId,
  nickname:data[i].nickname

})
          }
    
   })


}
getlatlng()
{
  // alert(JSON.stringify(this.latlngdata))

  for(var i=0;i<this.getdata.length;i++){

  let myLatlng = new google.maps.LatLng(this.getdata[i].venueGpsLatitude, this.getdata[i].venueGpsLongitude);
  let marker =  new google.maps.Marker({ 
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: myLatlng,
      map:this.map,
      title:"Hello World!"
    });

     }

}





  ionViewDidLoad() {
    console.log('ionViewDidLoad DistributeAdPage');
    this.initMap();
  }
  navigateToYourAD()
  {
    this.navCtrl.setRoot(YourAdPage)
  }
  navigateToDashboard()
  {
    this.navCtrl.setRoot(MenuPage)
  }

initMap() {

  var map = new google.maps.Map(document.getElementById('distributemap'), {
    center: { lat: this.lat, lng: this.lng },
    zoom: 8,
    disableDefaultUI: true
  });
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
this.map=map
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });


  autocomplete.addListener('place_changed',  ()=> {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    console.log('getmeplace1' + JSON.stringify(place.address_components[0].short_name))
    console.log('getmeplace2' + JSON.stringify(place.address_components[2].long_name))
    console.log('getmeplace3' + JSON.stringify(place.address_components[3].long_name))
    var latlng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
    geocoder.geocode({ 'latLng': latlng },
        function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              for (var i = 0; i < results[0].address_components.length; i++) {
                if (results[0].address_components[i].types[0] == "postal_code" ) {
                  console.log("Zip Code: " + results[0].address_components[i].short_name);
                  localStorage["zipcode"] = results[0].address_components[i].short_name

                } 
              }

            }
            else {
              alert("No results");
            }
          }
          else {
            alert("Status: " + status);
          }

          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              for (var i = 0; i < results[0].address_components.length; i++) {
                if (results[0].address_components[i].types[0] == "country") {
                  console.log("country: " + results[0].address_components[i].short_name);
                  localStorage["country"] = results[0].address_components[i].short_name

                }
              }

            }
            else {
              alert("No results");
            }
          }
          else {
            alert("Status: " + status);
          }


        }
    );

    geocoder.geocode(
      { 'latLng': latlng },
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            var add = results[0].formatted_address;
            var value = add.split(",");

           var count = value.length;
         var   country = value[count - 1];
          var  state = value[count - 2];
          var city = value[count - 3];
          console.log('country' + country)
          console.log('state' + state)
          console.log('city' + city)
        //  localStorage['country'] = country
          localStorage['state'] = state
          localStorage['city']=city


           
          }
          else {
           
          }
        }
        else {
         
        }
      }
    );




 if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    console.log('town' + place.name)
    localStorage['town'] = place.name
    infowindowContent.children['place-address'].textContent = address;
    localStorage['address'] = address
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function () {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener('changetype-all', []);
  setupClickListener('changetype-address', ['address']);
//  setupClickListener('changetype-establishment', ['establishment']);
//  setupClickListener('changetype-geocode', ['geocode']);

  //document.getElementById('use-strict-bounds')
  //  .addEventListener('click', function () {
    //  console.log('Checkbox clicked! New state=' + this.checked);
    //  autocomplete.setOptions({ strictBounds: this.checked });
  //   });

  let myLatlng = new google.maps.LatLng(this.lat, this.lng);
  marker = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: myLatlng,
    map: map,
    title: "Venue Location!"
  });
  google.maps.event.addListener(marker, "click", function (event) {
    var latitude = this.position.lat();
    var longitude = this.position.lng();
    console.log(latitude)
 //   this.geocodeLatLng(geocoder, map, infowindow, latitude, longitude);
    var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      if (status === 'OK') {
        if (results[0]) {
         map.setZoom(11);
          var marker = new google.maps.Marker({
            position: latlng,
           map: map
          });
          var clear
          console.log('info' + infowindowContent.children['place-address'].textContent)
          if (infowindowContent.children['place-address'].textContent != null) {
            infowindowContent.children['place-address'].textContent = clear
            infowindowContent.children['place-name'].textContent = clear
            
            console.log('1'+infowindowContent.children['place-address'].textContent )
            infowindowContent.children['place-address'].textContent = results[0].formatted_address;
            console.log('2' + infowindowContent.children['place-address'].textContent)

          }
        // infowindow.setContent(results[0].formatted_address);
         infowindow.open(map, marker);
       //  results[0].formatted_address= document.getElementById('pac-input');
       //  console.log(results[0].formatted_address)
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });

  })
}
  geocodeLatLng(geocoder, map, infowindow,latitude,longitude) {
    console.log('hi')
    var latlng = { lat: parseFloat(latitude), lng: parseFloat(longitude) };
   

}
distributeads()
{
  // alert('hi'+this.Venue+this.screens+this.fromDate+this.toDate+this.shift+this.fromTime)
 
  // this.units.push({'venue':this.Venue,'screens':this.screens})
  // alert(this.Venue)
  if(this.fromDate>this.toDate)
  {
  alert('Select the Correct Date')
  }
  else
  {
    
  
  this.schedulingCms.push({'fromTime':this.fromTime,'toTime':this.toTime,'Fromdays':this.Fromdays,'todays':this.todays,'fromdate':this.fromDate,'todate':this.toDate})
  let loading = this.loadingCtrl.create({  cssClass: 'transparent',
  spinner: 'hide',
  content: `<img src="assets/img/loader.gif" style="height:50% !important;background:transparent">`, })
  Observable.of(loading).flatMap(loading => loading.present())
    .flatMap(() => this.security.DistributeAds(this.screens,this.schedulingCms))
    .subscribe(data => {
      loading.dismiss()
       this.navCtrl.setRoot(MenuPage)
        })

      }

}










}
