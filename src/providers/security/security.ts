import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import{ENV}from'../../app/env'
import{Observable}from'rxjs/Rx'
import { Type } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class SecurityProvider {

  constructor(public http: Http) {
    console.log('Hello SecurityProvider Provider');
  }
  
 
   




getCampaigns()
{
  
  var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.get('http://stats.didws.com:10001/getCampaigns',requestOptions)
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })

}

getLibraryItems()
{
   var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.get('http://stats.didws.com:10001/getLibraryItems',requestOptions)
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}


getNetworkADS()
{
   var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.get('http://stats.didws.com:10001/getNetworkAds',requestOptions)
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}




updateAdContent(jsonAd)
{
   var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.put('http://stats.didws.com:10001/updateAdContent?adId='+localStorage['adId']+'&adName='+localStorage['adName'],{jsonAd:jsonAd},requestOptions)
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}




getAdsFlagsList()
{
  var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers=new Headers({'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.get('http://stats.didws.com:10001/getPhasesTemplates',requestOptions)
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}



  Campaigns()
  {
    var tok=localStorage['token']
    let token1='Bearer'+tok
    let headers=new Headers({'Content-Type':'application/json', 'Authorization': token1})
    let requestOptions=new RequestOptions({headers:headers})
    return this.http.get('http://stats.didws.com:10001/getCampaigns',requestOptions)
    .timeout(ENV.timeout)
    .map((data)=>{
      return data.json()
    })
  }
regitserDeviceInVenue(addName)
{
  var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers=new Headers({'Content-Type':'application/json', 'Authorization': token1})
  let requestOptions = new RequestOptions({ headers: headers })
  return this.http.put('http://stats.didws.com:10001/registerDeviceInVenue?unitId='+localStorage['unitId']+'&venueId='+localStorage['venueId']+'&nickname='+addName,{},requestOptions)
  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })

}

DevicesInNetwork()
{
var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.get('http://stats.didws.com:10001/listVenuesFull',requestOptions)
       .timeout(ENV.timeout)
       .map((data)=>{
        return data.json()
       })

}
testdebug()
{
  return this.http.get('https://d86nlrrsul.execute-api.eu-west-1.amazonaws.com/dev/reserveNewDeviceId?networkId=-10000&refId=1508756526688_0.85673547827823785398435')
   .timeout(ENV.timeout)
    .map((data)=>{
      return data.json()
    })

}



  creditInfo()
  {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.get('http://stats.didws.com:10001/retrieveBillingDataPartial',requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })

  }
  billinginfo(company,address,city,country,pincode,cardnumber,month,year,cvc)
  {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.put('http://stats.didws.com:10001/createOrUpdateBillingData?name=' + company + '&address=' + address + '&zipCode=' + pincode + '&city=' + city + '&country=' + country + '&month=' + month + '&year=' + year + '&cardNumber=' + cardnumber + '&cvc=' + cvc, {} ,requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
 infoqrcode(UnitId)
  {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'text/plain', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.get('http://stats.didws.com:10001/getDeviceInfoHtml?unitId=' + UnitId, requestOptions)
    .timeout(ENV.timeout)
    .map((response)=>{
      console.log('sthriingy',JSON.stringify(response));
      return (<any>response)._body;
    })

  }
  getVenueList() {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })

    return this.http.get('http://stats.didws.com:10001/getVenueCategories', requestOptions)

      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }


createvenue(category,venuename)
  {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({'Content-Type': 'application/ json','Authorization': token1})
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.put('http://stats.didws.com:10001/createVenue?name=' + venuename + '&category=' + category + '&country=' + localStorage['country'] + '&city=' + localStorage['city'] + '&town=' + localStorage['town'] + '&address=' + localStorage['address'] + '&zipCode=' + localStorage["zipcode"]+'&gpsLatitude='+localStorage['gpslatitude']+'&gpsLongitude='+localStorage['gpslongitude'], {},requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
  flaglist()
  {
  
    return this.http.get('http://stats.didws.com:10001/getAdsFlagsList', true)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
  deletead(adId) {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.delete('http://stats.didws.com:10001/deleteAd?adId=' + adId, requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
  libraryItems(adId)
  {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.get('http://stats.didws.com:10001/getSingleAd?adId=' + adId, requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }

getSingleAd()
  {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.get('http://stats.didws.com:10001/getSingleAd?adId=' + localStorage['adId'], requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }



  createad(adName)
  {

    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.put('http://stats.didws.com:10001/createAd?adName=' + adName, {},requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
   
  testqr() {
    return this.http.get('http://stats.didws.com:10001/debugReserveNewDeviceAndGetQR')
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })

  }
  qrcodesend(qrcode) {
    var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 });
    let requestOptions = new RequestOptions({ headers: headers });

    return this.http.put('http://stats.didws.com:10001/claimDeviceByQR?qrCode=' + qrcode, {}, requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }

  Signup(email, firstName,

    lastName,
    pwHash,
    networkName) {

    return this.http.put(ENV.mainApi + '/createUser?email=' + email + '&firstName=' + firstName + '&lastName=' + lastName + '&pwHash=' + pwHash + '&networkName=' + networkName + '', true)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
  fogetpassword(email) {
    return this.http.get(ENV.mainApi + '/forgotPassword?email=' + email + '')
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }



  devicenetwork() {

    let token1 = 'Bearer ' + localStorage['token']
    let headers = new Headers({ 'Content-Type': 'text/plain', 'Authorization': token1 });
    let requestOptions = new RequestOptions({ headers: headers, method: 'GET' });
    return this.http.get('http://stats.didws.com:10001/getDevicesInNetwork', requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })

  }

  DeviceandVenuenetwork() {

    let token1 = 'Bearer ' + localStorage['token']
    let headers = new Headers({ 'Content-Type': 'text/plain', 'Authorization': token1 });
    let requestOptions = new RequestOptions({ headers: headers, method: 'GET' });
    return this.http.get('http://stats.didws.com:10001/getDevicesAndVenuesInNetwork', requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })

  }


  login(email, pwHash) {

    return this.http.get(ENV.mainApi + '/checkUserPassword?email=' + encodeURIComponent(email) + '&pwHash=' + encodeURIComponent(pwHash) + '', true)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })

  }
  hopetest(user, pwdHashed) {
   

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(ENV.mainApi + '/checkUserPassword?email=' + encodeURIComponent(user) + "&pwHash=" + encodeURIComponent(pwdHashed), options)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }
  hopetestsignup(
    user,
    pwdHashed,
    firstName,
    lastName,
    networkName)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.put(ENV.mainApi + '/createUser?email=' + user + '&firstName=' + firstName + '&lastName=' + lastName + '&pwHash=' + pwdHashed + '&networkName=' + networkName , true)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
  }

  DistributeAds(units,schedulingCms)
  {
    var tok=localStorage['token']
    let token1='Bearer'+tok
    let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
    let requestOptions=new RequestOptions({headers:headers})
    return this.http.put('http://stats.didws.com:10001/updateSimpleCampaignDistribution?adId='+localStorage['adId']+'&units='+units ,{schedulingCms:schedulingCms},requestOptions)
  
    .timeout(ENV.timeout)
    .map((data)=>{
      return data.json()
    })

  }
 getstatsdata(date,selectedunitId,TYPE)
 {
   var date
   var selectedunitId
   var TYPE


  var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.get('http://stats.didws.com:10011/getUnitHourStats?type=FULL'+'&unitId='+selectedunitId+'&from='+date+'&toIncluded='+date ,requestOptions)

  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
 }

 UCCms(selectedunitId,randomid)
{
  let token1 = 'Bearer ' + localStorage['token']
  let headers = new Headers({ 'Content-Type': 'text/plain', 'Authorization': token1 });
  let requestOptions = new RequestOptions({ headers: headers, method: 'GET' });
  return this.http.get('http://stats.didws.com:10001/unitCampaignsCms?unitId='+selectedunitId+'&unitRandomId='+randomid, requestOptions)
    .timeout(ENV.timeout)
    .map((data) => {
      return data.json()
    })
}

getSingleAdedit(adid)
{
  var tok = localStorage['token']
    let token1 = 'Bearer' + tok
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token1 })
    let requestOptions = new RequestOptions({ headers: headers })
    return this.http.get('http://stats.didws.com:10001/getSingleAd?adId=' +adid, requestOptions)
      .timeout(ENV.timeout)
      .map((data) => {
        return data.json()
      })
}


adperformance(date,id)
{
  var tok=localStorage['token']
  let token1='Bearer'+tok
  let headers = new Headers({ 'Content-Type':'application/json','Authorization':token1})
  let requestOptions=new RequestOptions({headers:headers})
  return this.http.get('http://stats.didws.com:10011/getUnitAdsPerformance?unitId='+id+'&from='+date+'&toIncluded='+date ,requestOptions)

  .timeout(ENV.timeout)
  .map((data)=>{
    return data.json()
  })
}






}
