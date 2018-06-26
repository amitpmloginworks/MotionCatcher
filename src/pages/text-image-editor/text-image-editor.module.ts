import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextImageEditorPage } from './text-image-editor';

@NgModule({
  declarations: [
    TextImageEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(TextImageEditorPage),
  ],
})
export class TextImageEditorPageModule {}
