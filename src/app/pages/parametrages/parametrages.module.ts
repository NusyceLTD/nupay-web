import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametragesRoutingModule } from './parametrages-routing.module';
import { DevisesComponent } from './devises/devises.component';
import { ModeDepotsComponent } from './mode-depots/mode-depots.component';
import { ModeRetraitsComponent } from './mode-retraits/mode-retraits.component';
import {RouterModule, Routes} from '@angular/router';
import {UIModule} from '../../shared/ui/ui.module';


@NgModule({
  declarations: [DevisesComponent, ModeDepotsComponent, ModeRetraitsComponent],
  imports: [
    CommonModule,
    ParametragesRoutingModule,
    UIModule,
  ]
})
export class ParametragesModule { }
