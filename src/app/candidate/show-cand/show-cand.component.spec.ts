import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCandComponent } from './show-cand.component';

describe('ShowCandComponent', () => {
  let component: ShowCandComponent;
  let fixture: ComponentFixture<ShowCandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
