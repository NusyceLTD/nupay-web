import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { AppsRoutingModule } from './apps-routing.module';

import { EmailModule } from './email/email.module';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
    declarations: [CalendarComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModalModule,
        FullCalendarModule,
        AppsRoutingModule,
        UIModule,
        EmailModule,
        ProjectModule,
        TasksModule,
    ]
})

export class AppsModule { }
