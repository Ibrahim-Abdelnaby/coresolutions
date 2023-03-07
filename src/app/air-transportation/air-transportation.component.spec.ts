import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTransportationComponent } from './air-transportation.component';

describe('AirTransportationComponent', () => {
  let component: AirTransportationComponent;
  let fixture: ComponentFixture<AirTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirTransportationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
