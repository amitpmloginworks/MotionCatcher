import { Directive, Input, ElementRef, Renderer} from '@angular/core';
import { DomController } from 'ionic-angular';
/**
 * Generated class for the AbsolutedragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[absolutedrag]' // Attribute selector
})
export class AbsolutedragDirective {
@Input('startLeft') startLeft: any;
    @Input('startTop') startTop: any;
    @Input('startRight') startRight:any;
    @Input('starBottom') starBottom:any;
    newTop
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {
    console.log('Hello AbsoluteDrag Directive');
  }

    ngAfterViewInit() {
 
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        // this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'bottom', this.starBottom + 'px');
         // this.renderer.setElementStyle(this.element.nativeElement, 'right', this.startRight + 'px');
 
        let hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
 
        hammer.on('pan', (ev) => {
          this.handlePan(ev);
        });
 
    }
   handlePan(ev){
        // let newLeft = ev.center.x-ev.target.parentElement.getBoundingClientRect().left;
        //   this.newTop = ev.center.y-ev.target.parentElement.getBoundingClientRect().top;
        let newLeft = ev.center.x-55;
        this.newTop = ev.center.y-55;

       let newRight = ev.center.z;
        console.log('y'+this.newTop)
        console.log('x'+newLeft)
    
     
  
        this.domCtrl.write(() => {
          if (this.newTop < 136) {
            this.renderer.setElementStyle(this.element.nativeElement, 'left', newLeft + 'px');
            this.renderer.setElementStyle(this.element.nativeElement, 'top', this.newTop + 'px');
            this.renderer.setElementStyle(this.element.nativeElement, 'Right', newRight + 'px');
          }
           
        });
 
    }

}
