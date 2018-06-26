import { Directive } from '@angular/core';

/**
 * Generated class for the LoadingControlDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[loading-control]' // Attribute selector
})
export class LoadingControlDirective {

  constructor() {
    console.log('Hello LoadingControlDirective Directive');
  }

}
