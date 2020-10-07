import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retraits',
  templateUrl: './retraits.component.html',
  styleUrls: ['./retraits.component.scss']
})
export class RetraitsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Opérations', path: '/' }, { label: 'Retraits', active: true }];

  }

}
