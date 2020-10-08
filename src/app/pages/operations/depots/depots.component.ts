import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depots',
  templateUrl: './depots.component.html',
  styleUrls: ['./depots.component.scss']
})
export class DepotsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Opérations', path: '/' }, { label: 'Dépots', active: true }];

  }

}
