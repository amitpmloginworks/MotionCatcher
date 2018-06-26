import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillinginfoPage } from './billinginfo';

@NgModule({
  declarations: [
    BillinginfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BillinginfoPage),
  ],
})
export class BillinginfoPageModule {}
