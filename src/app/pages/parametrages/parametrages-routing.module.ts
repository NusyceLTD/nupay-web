import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevisesComponent} from './devises/devises.component';
import {ModeDepotsComponent} from './mode-depots/mode-depots.component';
import {ModeRetraitsComponent} from './mode-retraits/mode-retraits.component';


const routes: Routes = [
  {
    path: 'parametrages-devises',
    component: DevisesComponent
  },
  {
    path: 'parametrages-modedepots',
    component: ModeDepotsComponent
  },
  {
    path: 'parametrages-moderetraits',
    component: ModeRetraitsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametragesRoutingModule { }
