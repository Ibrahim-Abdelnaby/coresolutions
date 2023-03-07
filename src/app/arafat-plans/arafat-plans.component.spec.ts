import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArafatPlansComponent } from './arafat-plans.component';

describe('ArafatPlansComponent', () => {
  let component: ArafatPlansComponent;
  let fixture: ComponentFixture<ArafatPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArafatPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArafatPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
