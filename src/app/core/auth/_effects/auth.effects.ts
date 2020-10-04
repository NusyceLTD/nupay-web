// Angular
import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
// RxJS
import {filter, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {defer, Observable, of} from 'rxjs';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
// Auth actions
import {AuthActionTypes, Login, Logout, Register, UserLoaded, UserRequested} from '../_actions/auth.actions';
import {AuthService} from '../_services/index';
import {AppState} from '../../reducers';
import {environment} from '../../../../environments/environment';
import {isUserLoaded} from '../_selectors/auth.selectors';
import {CookieService} from "../_services/cookie.service";

@Injectable()
export class AuthEffects {
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => {
      this.cookieService.setCookie(environment.authTokenKey, action.payload.authToken, 1);
      this.store.dispatch(new UserRequested());
    }),
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => {
      this.cookieService.deleteCookie(environment.authTokenKey);
      this.router.navigate(['/auth/login'], {queryParams: {returnUrl: this.returnUrl}});
      document.location.reload();
    })
  );

  @Effect({dispatch: false})
  register$ = this.actions$.pipe(
    ofType<Register>(AuthActionTypes.Register),
    tap(action => {
      this.cookieService.setCookie(environment.authTokenKey, action.payload.authToken, 1);
    })
  );

  @Effect({dispatch: false})
  loadUser$ = this.actions$
    .pipe(
      ofType<UserRequested>(AuthActionTypes.UserRequested),
      withLatestFrom(this.store.pipe(select(isUserLoaded))),
      filter(([action, _isUserLoaded]) => !_isUserLoaded),
      mergeMap(([action, _isUserLoaded]) => this.auth.getUserByToken()),
      tap(_user => {
        if (_user) {
          this.store.dispatch(new UserLoaded({user: _user.items}));
        } else {
          this.store.dispatch(new Logout());
        }
      })
    );

  @Effect()
  init$: Observable<Action> = defer(() => {
    const userToken = this.cookieService.getCookie(environment.authTokenKey);
    let observableResult = of({type: 'NO_ACTION'});
    if (userToken) {
      observableResult = of(new Login({authToken: userToken}));
    }
    return observableResult;
  });

  private returnUrl: string;

  constructor(private actions$: Actions,
              private router: Router,
              private cookieService: CookieService,
              private auth: AuthService,
              private store: Store<AppState>) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }
}
