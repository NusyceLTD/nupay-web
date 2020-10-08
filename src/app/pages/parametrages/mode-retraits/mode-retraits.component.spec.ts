import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeRetraitsComponent } from './mode-retraits.component';

describe('ModeRetraitsComponent', () => {
  let component: ModeRetraitsComponent;
  let fixture: ComponentFixture<ModeRetraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeRetraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeRetraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
