import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsRoutingModule } from './operations-routing.module';
import {AppComponent} from '../../app.component';
import {DepotsComponent} from './depots/depots.component';
import {RetraitsComponent} from './retraits/retraits.component';
import {UIModule} from '../../shared/ui/ui.module';


@NgModule({
  declarations: [DepotsComponent, RetraitsComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    UIModule
  ]
})
export class OperationsModule { }
