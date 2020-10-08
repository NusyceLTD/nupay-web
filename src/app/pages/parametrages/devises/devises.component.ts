import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devises',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.scss']
})
export class DevisesComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Paramètrages', path: '/' }, { label: 'Dévises', active: true }];
  }

}
