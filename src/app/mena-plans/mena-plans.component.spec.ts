import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenaPlansComponent } from './mena-plans.component';

describe('MenaPlansComponent', () => {
  let component: MenaPlansComponent;
  let fixture: ComponentFixture<MenaPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenaPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenaPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
