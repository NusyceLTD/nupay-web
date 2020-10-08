import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'other', loadChildren: () => import('./other/other.module').then(m => m.OtherModule) },
 /* { path: 'operations', loadChildren: () => import('./operations/operations.module').then(m => m.OperationsModule) },
  { path: 'parametrages', loadChildren: () => import('./parametrages/parametrages.module').then(m => m.ParametragesModule) },
  { path: 'Publications', loadChildren: () => import('./publications/publications.module').then(m => m.PublicationsModule) },
  { path: 'transactions', loadChildren: () => import('./operations/transactions/transactions.module').then(m => m.TransactionsModule) },
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
