import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {CookieService} from '../../../../core/transation/_services/cookie.service';

@Injectable({providedIn: 'root'})
export class TransactionService {
  constructor(private http: HttpClient) {
  }
  logout() {

  }
}
