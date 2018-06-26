import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddvenuePage } from './addvenue';

@NgModule({
  declarations: [
    AddvenuePage,
  ],
  imports: [
    IonicPageModule.forChild(AddvenuePage),
  ],
})
export class AddvenuePageModule {}
