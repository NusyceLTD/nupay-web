import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-depots',
  templateUrl: './mode-depots.component.html',
  styleUrls: ['./mode-depots.component.scss']
})
export class ModeDepotsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Paramètrages', path: '/' }, { label: 'Modes de dépots', active: true }];
  }

}
