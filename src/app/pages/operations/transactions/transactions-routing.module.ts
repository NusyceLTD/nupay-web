import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnvoisComponent} from './envois/envois.component';
import {ReceptionsComponent} from './receptions/receptions.component';
import {ToutesTransationsComponent} from './toutes-transations/toutes-transations.component';
const routes: Routes = [
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
