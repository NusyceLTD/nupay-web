import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitsComponent } from './retraits.component';

describe('RetraitsComponent', () => {
  let component: RetraitsComponent;
  let fixture: ComponentFixture<RetraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
