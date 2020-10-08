import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PermissionsComponent} from './permissions/permissions.component';
import {RolesComponent} from './roles/roles.component';
import {UtilisateursComponent} from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  {
    path: 'compteutilisateur-permissions',
    component: PermissionsComponent
  },
  {
    path: 'compteutilisateur-roles',
    component: RolesComponent
  },
  {
    path: 'compteutilisateur-utilisateurs',
    component: UtilisateursComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteUtilisateurRoutingModule { }
