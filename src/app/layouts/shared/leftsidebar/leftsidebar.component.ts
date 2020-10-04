import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SIDEBAR_WIDTH_CONDENSED } from '../../layout.model';
import {AuthService} from "../../../core/auth/_services";

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss'],

})
export class LeftsidebarComponent implements OnInit {

  @Input() sidebarType: string;

  constructor(private router: Router, private authenticationService: AuthService) { }

  ngOnInit() {
  }

  /**
   * Is sidebar condensed?
   */
  isSidebarCondensed() {
    return this.sidebarType === SIDEBAR_WIDTH_CONDENSED;
  }

  /**
   * Logout the user
   */
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: '/' } });
  }
}
