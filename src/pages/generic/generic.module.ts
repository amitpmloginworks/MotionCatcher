import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenericPage } from './generic';

@NgModule({
  declarations: [
    GenericPage,
  ],
  imports: [
    IonicPageModule.forChild(GenericPage),
  ],
})
export class GenericPageModule {}
