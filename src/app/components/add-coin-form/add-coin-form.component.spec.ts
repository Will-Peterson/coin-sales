import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoinFormComponent } from './add-coin-form.component';

describe('AddCoinFormComponent', () => {
  let component: AddCoinFormComponent;
  let fixture: ComponentFixture<AddCoinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoinFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
