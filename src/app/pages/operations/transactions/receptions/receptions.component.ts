import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptions',
  templateUrl: './receptions.component.html',
  styleUrls: ['./receptions.component.scss']
})
export class ReceptionsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Opérations', path: '/' }, { label: 'Transactions', path: '/' }, { label: 'Receptions', active: true }];

  }

}
