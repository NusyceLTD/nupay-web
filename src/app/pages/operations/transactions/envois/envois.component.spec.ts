import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoisComponent } from './envois.component';

describe('EnvoisComponent', () => {
  let component: EnvoisComponent;
  let fixture: ComponentFixture<EnvoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
