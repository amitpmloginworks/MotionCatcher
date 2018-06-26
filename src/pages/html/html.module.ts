import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlPage } from './html';

@NgModule({
  declarations: [
    HtmlPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlPage),
  ],
})
export class HtmlPageModule {}
