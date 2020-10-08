import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { EnvoisComponent } from './envois/envois.component';
import { ReceptionsComponent } from './receptions/receptions.component';
import { ToutesTransationsComponent } from './toutes-transations/toutes-transations.component';
import {UIModule} from '../../../shared/ui/ui.module';
import {SharedModule} from '../../apps/email/shared/shared.module';

@NgModule({
  declarations: [EnvoisComponent, ReceptionsComponent, ToutesTransationsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    UIModule,
    CommonModule,
    SharedModule,
    UIModule,
  ]
})
export class TransactionsModule { }
