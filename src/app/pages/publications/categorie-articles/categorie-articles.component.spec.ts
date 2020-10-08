import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieArticlesComponent } from './categorie-articles.component';

describe('CategorieArticlesComponent', () => {
  let component: CategorieArticlesComponent;
  let fixture: ComponentFixture<CategorieArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
