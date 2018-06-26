import { NgModule } from '@angular/core';
import { AbsolutedragDirective } from './absolutedrag/absolutedrag';
import { LoadingControlDirective } from './loading-control/loading-control';
import { AbsoluteDragTextDirective } from './absolute-drag-text/absolute-drag-text';
@NgModule({
	declarations: [AbsolutedragDirective,
    AbsolutedragDirective,
    LoadingControlDirective,
    AbsoluteDragTextDirective],
	imports: [],
	exports: [AbsolutedragDirective,
    AbsolutedragDirective,
    LoadingControlDirective,
    AbsoluteDragTextDirective]
})
export class DirectivesModule {}
