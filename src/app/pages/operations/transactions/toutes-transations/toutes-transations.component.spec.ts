import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesTransationsComponent } from './toutes-transations.component';

describe('ToutesTransationsComponent', () => {
  let component: ToutesTransationsComponent;
  let fixture: ComponentFixture<ToutesTransationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutesTransationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutesTransationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
