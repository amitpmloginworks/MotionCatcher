import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { ProgressbarComponent } from './progressbar/progressbar';
@NgModule({
	declarations: [LoaderComponent,
    ProgressbarComponent],
	imports: [],
	exports: [LoaderComponent,
    ProgressbarComponent]
})
export class ComponentsModule {}
