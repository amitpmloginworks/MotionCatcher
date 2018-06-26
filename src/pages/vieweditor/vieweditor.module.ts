import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VieweditorPage } from './vieweditor';

@NgModule({
  declarations: [
    VieweditorPage,
  ],
  imports: [
    IonicPageModule.forChild(VieweditorPage),
  ],
})
export class VieweditorPageModule {}
