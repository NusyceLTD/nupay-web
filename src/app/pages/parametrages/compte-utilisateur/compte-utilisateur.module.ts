import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteUtilisateurRoutingModule } from './compte-utilisateur-routing.module';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import {UIModule} from '../../../shared/ui/ui.module';
import {FormsModule} from "@angular/forms";
import { UtilisateursSortableDirective } from './utilisateurs-sortable.directive';
import {NgbModule, NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [UtilisateursComponent, RolesComponent, PermissionsComponent, UtilisateursSortableDirective],
  imports: [
    CommonModule,
    CompteUtilisateurRoutingModule,
    UIModule,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbModule,
  ]
})
export class CompteUtilisateurModule { }
