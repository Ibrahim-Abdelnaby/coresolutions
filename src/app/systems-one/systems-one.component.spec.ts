import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsOneComponent } from './systems-one.component';

describe('SystemsOneComponent', () => {
  let component: SystemsOneComponent;
  let fixture: ComponentFixture<SystemsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
