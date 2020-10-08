import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeDepotsComponent } from './mode-depots.component';

describe('ModeDepotsComponent', () => {
  let component: ModeDepotsComponent;
  let fixture: ComponentFixture<ModeDepotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeDepotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeDepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
