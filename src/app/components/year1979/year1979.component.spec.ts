import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1979Component } from './year1979.component';

describe('Year1979Component', () => {
  let component: Year1979Component;
  let fixture: ComponentFixture<Year1979Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Year1979Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year1979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
