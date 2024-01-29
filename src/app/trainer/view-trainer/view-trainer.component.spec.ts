import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainerComponent } from './view-trainer.component';

describe('ViewTrainerComponent', () => {
  let component: ViewTrainerComponent;
  let fixture: ComponentFixture<ViewTrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
