import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepotsComponent} from './depots/depots.component';
import {RetraitsComponent} from './retraits/retraits.component';
const routes: Routes = [
  {
    path: 'operations-depots',
    component: DepotsComponent
  },
  {
    path: 'operations-retraits',
    component: RetraitsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
