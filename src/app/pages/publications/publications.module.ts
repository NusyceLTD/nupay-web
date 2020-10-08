import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { CategorieArticlesComponent } from './categorie-articles/categorie-articles.component';
import {UIModule} from '../../shared/ui/ui.module';

@NgModule({
  declarations: [ArticlesComponent, CategorieArticlesComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    UIModule,
  ]
})
export class PublicationsModule { }
