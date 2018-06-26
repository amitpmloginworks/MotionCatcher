import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewphasePage } from './newphase';

@NgModule({
  declarations: [
    NewphasePage,
  ],
  imports: [
    IonicPageModule.forChild(NewphasePage),
  ],
})
export class NewphasePageModule {}
