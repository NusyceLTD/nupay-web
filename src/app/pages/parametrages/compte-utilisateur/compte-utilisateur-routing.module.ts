import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PermissionsComponent} from './permissions/permissions.component';
import {RolesComponent} from './roles/roles.component';
import {UtilisateursComponent} from './utilisateurs/utilisateurs.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteUtilisateurRoutingModule { }
