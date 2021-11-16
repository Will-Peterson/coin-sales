import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1978Component } from './year1978.component';

describe('Year1978Component', () => {
  let component: Year1978Component;
  let fixture: ComponentFixture<Year1978Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Year1978Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year1978Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
