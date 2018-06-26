import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ScanQrPage } from '../scan-qr/scan-qr';
import { Observable } from 'rxjs/Rx'
import { SecurityProvider } from '../../providers/security/security'
import{MenuPage}from'../menu/menu'
declare var google;
declare var window;
/**
 * Generated class for the AddvenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-addvenue',
  templateUrl: 'addvenue.html',
})
export class AddvenuePage {
 @ViewChild('map') map: ElementRef;
 // map: any;
  position
  lat
  lng
  clear
  category
  venueName
  categorydata
  constructor(public toastCtrl:ToastController,public security: SecurityProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.lat = this.navParams.get('lat')
    this.lng = this.navParams.get('lng')
    this.clear=''
    this.getVenueList()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddvenuePage');
      this.initMap();
  }

navigateToWelcome(){
  this.navCtrl.setRoot(MenuPage)
}

 
  navigateToscanQR() {
    this.taptosearch()
}

initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: this.lat, lng: this.lng },
    zoom: 13,
    disableDefaultUI: true
  });
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

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
       
       
       localStorage['gpslatitude']=place.geometry.location.lat()
       localStorage['gpslongitude']=place.geometry.location.lng()

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
            }
          }
          else {

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
       
            }
          }
          else {
         
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
         infowindow.open(map, marker);
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

  taptosearch(){
    let loading = this.loadingCtrl.create({ content: 'wait..' })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.createvenue(this.category, this.venueName))
      .subscribe((data) => {
        loading.dismiss()
        this.navCtrl.push(ScanQrPage);
        localStorage['venueId']=data.venueId
      let toast=this.toastCtrl.create({
        duration:3000,
        message:'Venue Added!'
      })
     toast.present()
      })

  }


  getVenueList() {
    let loading = this.loadingCtrl.create({ content: 'wait..' })
    Observable.of(loading).flatMap(loading => loading.present())
      .flatMap(() => this.security.getVenueList())
      .subscribe((data) => {
        loading.dismiss()
        console.log(data)
        this.categorydata=data
      })
  }
}
