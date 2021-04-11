import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveSkillComponent } from './add-remove-skill.component';

describe('AddRemoveSkillComponent', () => {
  let component: AddRemoveSkillComponent;
  let fixture: ComponentFixture<AddRemoveSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
