import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAdPage } from './create-ad';

@NgModule({
  declarations: [
    CreateAdPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAdPage),
  ],
})
export class CreateAdPageModule {}
