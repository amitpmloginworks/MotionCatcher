import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ADtemplatesPage } from '../a-dtemplates/a-dtemplates';
/**
 * Generated class for the ShowmyadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showmyad',
  templateUrl: 'showmyad.html',
})
export class ShowmyadPage {
json
img
imagehtmlproperties
texthtmlproperties
texthtmlproperties1
imageproperties=[]
imagedata
textdata=[]
textdata1=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.imagedata=this.navParams.get('img')
  this.imagehtmlproperties=this.navParams.get('imagehtmlproperties')
  this.texthtmlproperties=this.navParams.get('texthtmlproperties')
  this.texthtmlproperties1=this.navParams.get('editboxad')

for(var i=0;i<this.imagedata.length;i++)
{

  this.imageproperties.push({'imagedata':this.imagedata[i],
'imagehtmlsetheight':this.imagehtmlproperties[i].setHeight,
'imagehtmlsetwidth':this.imagehtmlproperties[i].setWidth,
'imagehtmlsettop':this.imagehtmlproperties[i].settop,
'imagehtmlsetleft':this.imagehtmlproperties[i].setleft,
'imagehtmlsetrotate':this.imagehtmlproperties[i].setrotate,
'transform':this.imagehtmlproperties[i].transform
})


}
for(var j=0;j<this.texthtmlproperties.length;j++)
{
this.textdata.push({
'textinput':this.texthtmlproperties[j].inputHtml,
'setextleft':this.texthtmlproperties[j].setextleft,
'settexttop':this.texthtmlproperties[j].settexttop,
'setheight':this.texthtmlproperties[j].setheight,
'setwidth':this.texthtmlproperties[j].setwidth,
'fontsize':this.texthtmlproperties[j].fontsize,
'settextrotate':this.texthtmlproperties[j].settextrotate,
'settextcolor':this.texthtmlproperties[j].settextcolor,
'fontfamily':this.texthtmlproperties[j].setfontfamily,
'textdecoration':this.texthtmlproperties[j].textdecoration,
'settextfontstyle':this.texthtmlproperties[j].settextfontstyle,
'settextfontweight':this.texthtmlproperties[j].settextfontweight,
'settexttalign':this.texthtmlproperties[j].settexttalign
})
}

for(var k=0;k<this.texthtmlproperties1.length;k++)
{ this.textdata1.push({
    'textinput1':this.texthtmlproperties1[k].textinput,
    'setextleft':this.texthtmlproperties1[k].setextleft,
    'settexttop':this.texthtmlproperties1[k].settexttop,
    'setheight':this.texthtmlproperties1[k].setheight,
    'setwidth':this.texthtmlproperties1[k].setwidth,
    'fontsize':this.texthtmlproperties1[k].fontsize,
    'settextrotate':this.texthtmlproperties1[k].settextrotate,
    'settextcolor':this.texthtmlproperties1[k].settextcolor,
    'fontfamily':this.texthtmlproperties1[k].setfontfamily,
    'textdecoration':this.texthtmlproperties1[k].textdecoration,
    'settextfontstyle':this.texthtmlproperties1[k].settextfontstyle,
    'settextfontweight':this.texthtmlproperties1[k].settextfontweight,
    'settexttalign':this.texthtmlproperties1[k].settexttalign
    })
}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmyadPage');
  }

navigatetophase()
{
	this.navCtrl.setRoot(ADtemplatesPage)
}

}
