import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Paramètrages', path: '/' }, { label: 'Compte utilisateur', path: '/' }, { label: 'permisions', active: true }];
  }

}
