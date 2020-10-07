import {Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {finalize, first, takeUntil, tap} from 'rxjs/operators';
import {AuthService} from '../../../core/auth/_services';
import {AppState} from '../../../core/reducers';
import {Store} from '@ngrx/store';
import {Login} from '../../../core/auth';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;
  private unsubscribe: Subject<any>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>,
              private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthService) {
    this.unsubscribe = new Subject();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // this.authenticationService.login(this.f.email.value, this.f.password.value)
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(
        tap(user => {
          if (user.success) {
            this.store.dispatch(new Login({authToken: user.items.access_token}));
            this.router.navigateByUrl(this.returnUrl); // Main page
          } else {
            this.loading = false;
          }
        }, error => {

          this.loading = false;
        }),
        takeUntil(this.unsubscribe),
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
       )
      .subscribe();

  }
}
