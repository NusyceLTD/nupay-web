import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mode-retraits',
  templateUrl: './mode-retraits.component.html',
  styleUrls: ['./mode-retraits.component.scss']
})
export class ModeRetraitsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Paramètrages', path: '/' }, { label: 'Modes de retraits', active: true }];
  }

}
