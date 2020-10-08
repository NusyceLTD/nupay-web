import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toutes-transations',
  templateUrl: './toutes-transations.component.html',
  styleUrls: ['./toutes-transations.component.scss']
})
export class ToutesTransationsComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Opérations', path: '/' }, { label: 'Transactions', path: '/' }, { label: 'Toutes les transactions', active: true }];
  }

}
