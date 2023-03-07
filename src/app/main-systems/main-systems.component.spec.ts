import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSystemsComponent } from './main-systems.component';

describe('MainSystemsComponent', () => {
  let component: MainSystemsComponent;
  let fixture: ComponentFixture<MainSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
