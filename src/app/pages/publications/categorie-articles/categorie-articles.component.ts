import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie-articles',
  templateUrl: './categorie-articles.component.html',
  styleUrls: ['./categorie-articles.component.scss']
})
export class CategorieArticlesComponent implements OnInit {
  breadCrumbItems: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Publications', path: '/' }, { label: 'Catégories d\'articles', active: true }];
  }

}
