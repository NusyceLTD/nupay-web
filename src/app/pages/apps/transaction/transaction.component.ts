import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  private returnUrl: any;
  loading: any;
  breadCrumbItems: any;

  constructor() { }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'pages', path: '/' }, { label: 'Transactions', active: true }];


  }

}
