import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-to/relative-time';
@NgModule({
	declarations: [RelativeTimePipe],
	imports: [],
	exports: [RelativeTimePipe]
})
export class PipesModule {}
