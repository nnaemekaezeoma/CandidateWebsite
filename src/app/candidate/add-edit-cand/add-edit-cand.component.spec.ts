import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCandComponent } from './add-edit-cand.component';

describe('AddEditCandComponent', () => {
  let component: AddEditCandComponent;
  let fixture: ComponentFixture<AddEditCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
