import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HtmlpreviewPage } from './htmlpreview';

@NgModule({
  declarations: [
    HtmlpreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(HtmlpreviewPage),
  ],
})
export class HtmlpreviewPageModule {}
