import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourAdPage } from './your-ad';

@NgModule({
  declarations: [
    YourAdPage,
  ],
  imports: [
    IonicPageModule.forChild(YourAdPage),
  ],
})
export class YourAdPageModule {}
