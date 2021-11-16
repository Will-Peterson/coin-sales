import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoinFormComponent } from './edit-coin-form.component';

describe('EditCoinFormComponent', () => {
  let component: EditCoinFormComponent;
  let fixture: ComponentFixture<EditCoinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoinFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
