import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateaccountPage } from './createaccount';

@NgModule({
  declarations: [
    CreateaccountPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateaccountPage),
  ],
})
export class CreateaccountPageModule {}
