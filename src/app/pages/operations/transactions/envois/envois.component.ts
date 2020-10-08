import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envois',
  templateUrl: './envois.component.html',
  styleUrls: ['./envois.component.scss']
})
export class EnvoisComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Opérations', path: '/' }, { label: 'Transactions', path: '/' }, { label: 'Envois', active: true }];
  }

}
