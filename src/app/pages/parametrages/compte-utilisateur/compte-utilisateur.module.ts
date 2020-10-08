import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompteUtilisateurRoutingModule } from './compte-utilisateur-routing.module';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import {UIModule} from '../../../shared/ui/ui.module';


@NgModule({
  declarations: [UtilisateursComponent, RolesComponent, PermissionsComponent],
  imports: [
    CommonModule,
    CompteUtilisateurRoutingModule,
    UIModule,
  ]
})
export class CompteUtilisateurModule { }
