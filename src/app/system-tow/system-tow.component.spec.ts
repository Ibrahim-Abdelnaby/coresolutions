import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTowComponent } from './system-tow.component';

describe('SystemTowComponent', () => {
  let component: SystemTowComponent;
  let fixture: ComponentFixture<SystemTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
