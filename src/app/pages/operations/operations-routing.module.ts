import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepotsComponent} from './depots/depots.component';
import {RetraitsComponent} from './retraits/retraits.component';
import {EnvoisComponent} from './transactions/envois/envois.component';
import {ReceptionsComponent} from './transactions/receptions/receptions.component';
import {ToutesTransationsComponent} from './transactions/toutes-transations/toutes-transations.component';
import {TransactionsModule} from './transactions/transactions.module';

const routes: Routes = [
  {
    path: 'operations-depots',
    component: DepotsComponent
  },
  {
    path: 'operations-retraits',
    component: RetraitsComponent
  },
  {
    path: 'transactions-envois',
    component: EnvoisComponent
  },
  {
    path: 'transactions-receptions',
    component: ReceptionsComponent
  },
  {
    path: 'transactions-toutestransactions',
    component: ToutesTransationsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes),
  TransactionsModule],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
