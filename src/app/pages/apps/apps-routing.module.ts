import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import {TransactionComponent} from './transaction/transaction.component';
const routes: Routes = [
    {
        path: 'apps-calendar',
        component: CalendarComponent
    },
    {
        path: 'apps-transaction',
        component: TransactionComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
