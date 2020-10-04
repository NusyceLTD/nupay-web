// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {AuthService} from '../../../core/auth/_services';
// State
import {AppState} from '../../../core/reducers';
import {
  UserActionTypes,
  UserCreated,
  UserDeleted,
  UserOnServerCreated,
  UsersActionToggleLoading,
  UsersPageLoaded,
  UsersPageRequested,
  UsersPageToggleLoading,
  UserUpdated
} from '../_actions/user.actions';

@Injectable()
export class UserEffects {
  showPageLoadingDistpatcher = new UsersPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new UsersPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new UsersActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new UsersActionToggleLoading({isLoading: false});

  @Effect()
  loadUsersPage$ = this.actions$
    .pipe(
      ofType<UsersPageRequested>(UserActionTypes.UsersPageRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.auth.getAllUsers();
      }),
      map(response => {
        return new UsersPageLoaded({
          users: response.items
        });
      }),
    );

  @Effect()
  deleteUser$ = this.actions$
    .pipe(
      ofType<UserDeleted>(UserActionTypes.UserDeleted),
      mergeMap(({payload}) => {
          this.store.dispatch(this.showActionLoadingDistpatcher);
          return this.auth.deleteUser(payload.id);
        }
      ),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  @Effect()
  updateUser$ = this.actions$
    .pipe(
      ofType<UserUpdated>(UserActionTypes.UserUpdated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showActionLoadingDistpatcher);
        return this.auth.updateUser(payload.user);
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  @Effect()
  createUser$ = this.actions$
    .pipe(
      ofType<UserOnServerCreated>(UserActionTypes.UserOnServerCreated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showActionLoadingDistpatcher);
        return this.auth.createUser(payload.user).pipe(
          tap(res => {
            this.store.dispatch(new UserCreated({user: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private auth: AuthService, private store: Store<AppState>) {
  }
}
