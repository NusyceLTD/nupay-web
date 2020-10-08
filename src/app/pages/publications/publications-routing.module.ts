import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {CategorieArticlesComponent} from './categorie-articles/categorie-articles.component';

const routes: Routes = [
  {
    path: 'publications-articles',
    component: ArticlesComponent
  },
  {
    path: 'publications-categoriearticles',
    component: CategorieArticlesComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
