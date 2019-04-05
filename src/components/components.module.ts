import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import {CardComponent} from "./card/card";
import {HeaderComponent} from "./header/header";
import {IonicModule} from "ionic-angular";

@NgModule({
	declarations: [
	  CardComponent,
    HeaderComponent,
	  ListComponent
  ],
	imports: [
	  IonicModule
  ],
  entryComponents: [
    CardComponent,
    HeaderComponent,
    ListComponent
  ],
	exports: [
    CardComponent,
    HeaderComponent,
	  ListComponent
  ]
})
export class ComponentsModule {}
