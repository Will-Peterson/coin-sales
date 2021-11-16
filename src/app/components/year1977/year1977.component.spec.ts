import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1977Component } from './year1977.component';

describe('Year1977Component', () => {
  let component: Year1977Component;
  let fixture: ComponentFixture<Year1977Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Year1977Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year1977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
