import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../_models/user.model';
import {Permission} from '../_models/permission.model';
import {Role} from '../_models/role.model';
import {catchError, map} from 'rxjs/operators';
import {CookieService} from './cookie.service';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  // Authentication/Authorization
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'auth/login', {email, password});
  }

  getUserByToken(): Observable<any> {
    const userToken = this.cookieService.getCookie(environment.authTokenKey);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Authorization', 'Bearer ' + userToken);
    return this.http.get<any>(API_USERS_URL + 'auth/user', {headers: httpHeaders});
  }

  register(user: User): Observable<any> {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<User>(API_USERS_URL + 'auth/register', user, {headers: httpHeaders})
      .pipe(
        map((res: User) => {
          return res;
        }),
        catchError(err => {
          return null;
        })
      );
  }

  logout() {

  }

  /*
   * Submit forgot password request
   *
   * @param {string} email
   * @returns {Observable<any>}
   */
  public requestPassword(email: string): Observable<any> {
    return this.http.get(API_USERS_URL + 'forgot?=' + email)
      .pipe(catchError(this.handleError('forgot-password', []))
      );
  }


  getAllUsers(): Observable<any | User[]> {
    return this.http.get<any | User[]>(API_USERS_URL + 'users');
  }

  getUserById(userId: number): Observable<any | User> {
    return this.http.get<any | User>(API_USERS_URL + `users/${userId}`);
  }

  // DELETE => delete the user from the server
  deleteUser(userId: number) {
    const url = API_USERS_URL + 'user/' + userId;
    return this.http.delete(url);
  }

  // UPDATE => PUT: update the user on the server
  // tslint:disable-next-line
  updateUser(_user: User): Observable<any> {
    return this.http.put(API_USERS_URL + 'user/' + _user.id, _user);
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: User): Observable<User> {
    return this.http.post<User>(API_USERS_URL + 'user', user);
  }


  // Permission
  getAllPermissions(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'permission');
  }

  getRolePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(API_USERS_URL + 'rolePermissions/' + roleId);
  }

  // Roles
  getAllRoles(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'role');
  }

  getRoleById(roleId: number): Observable<Role> {
    return this.http.get<Role>(API_USERS_URL + `role/${roleId}`);
  }

  // CREATE =>  POST: add a new role to the server
  createRole(role: Role): Observable<Role> {
    return this.http.post<Role>(API_USERS_URL + 'role', role);
  }

  // UPDATE => PUT: update the role on the server
  updateRole(role: Role): Observable<any> {
    return this.http.put(API_USERS_URL + 'role', role);
  }

  // DELETE => delete the role from the server
  deleteRole(roleId: number): Observable<Role> {
    const url = `${API_USERS_URL + 'role'}/${roleId}`;
    return this.http.delete<Role>(url);
  }

  // Check Role Before deletion
  isRoleAssignedToUsers(roleId: number): Observable<boolean> {
    return this.http.get<boolean>(API_USERS_URL + 'checkIsRollAssignedToUser/' + roleId);
  }

  /*
   * Handle Http operation that failed.
   * Let the app continue.
    *
  * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
