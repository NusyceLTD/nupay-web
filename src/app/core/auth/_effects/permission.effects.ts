// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
import {defer, Observable, of} from 'rxjs';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
// Services
import {AuthService} from '../_services';
// Actions
import {AllPermissionsLoaded, AllPermissionsRequested, PermissionActionTypes} from '../_actions/permission.actions';

// Models

@Injectable()
export class PermissionEffects {
  @Effect()
  loadAllPermissions$ = this.actions$
    .pipe(
      ofType<AllPermissionsRequested>(PermissionActionTypes.AllPermissionsRequested),
      mergeMap(() => this.auth.getAllPermissions()),
      map(result => {
        return new AllPermissionsLoaded({
          permissions: result.items
        });
      })
    );

/*  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new AllPermissionsRequested());
  });*/

  constructor(private actions$: Actions, private auth: AuthService) {
  }
}
