import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';

/**
 * Generated class for the AbsoluteDragTextDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[absolute-drag-text]' // Attribute selector
})
export class AbsoluteDragTextDirective {
  @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {
    console.log('Hello AbsoluteDragTextDirective Directive');
  }
  ngAfterViewInit() {
 
    this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
    this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
    this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });

}

handlePan(ev){

    let newLeft = ev.center.x-55;
    let newTop = ev.center.y-55;

    this.domCtrl.write(() => {
      if(newLeft>5)
      {
      this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', newTop + 'px');
      console.log(newLeft)
      }

    });

}
}
