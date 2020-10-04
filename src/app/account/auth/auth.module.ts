import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UIModule} from '../../shared/ui/ui.module';

import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing';
import {ConfirmComponent} from './confirm/confirm.component';
import {PasswordresetComponent} from './passwordreset/passwordreset.component';
import {AuthEffects, AuthGuard, authReducer, AuthService} from "../../core/auth";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [LoginComponent, SignupComponent, ConfirmComponent, PasswordresetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    UIModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    };
  }
}
