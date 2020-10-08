import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevisesComponent} from './devises/devises.component';
import {ModeDepotsComponent} from './mode-depots/mode-depots.component';
import {ModeRetraitsComponent} from './mode-retraits/mode-retraits.component';
import {PermissionsComponent} from './compte-utilisateur/permissions/permissions.component';
import {RolesComponent} from './compte-utilisateur/roles/roles.component';
import {UtilisateursComponent} from './compte-utilisateur/utilisateurs/utilisateurs.component';
import {CompteUtilisateurModule} from './compte-utilisateur/compte-utilisateur.module';

const routes: Routes = [
  {
    path: 'parametrages-devises',
    component: DevisesComponent
  },
  {
    path: 'parametrages-modedepots',
    component: ModeDepotsComponent
  },
  {
    path: 'parametrages-moderetraits',
    component: ModeRetraitsComponent
  },
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
  imports: [RouterModule.forChild(routes),
  CompteUtilisateurModule],
  exports: [RouterModule]
})
export class ParametragesRoutingModule { }
