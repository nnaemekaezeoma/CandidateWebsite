import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSkillComponent } from './show-skill.component';

describe('ShowSkillComponent', () => {
  let component: ShowSkillComponent;
  let fixture: ComponentFixture<ShowSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
