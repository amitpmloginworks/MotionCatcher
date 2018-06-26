import { Component,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the ProgressbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent {

  text: string;
  @Input('progress') progress;
 

  constructor() {
    console.log('Hello ProgressbarComponent Component');
    this.text = 'Hello World';
  }

}
