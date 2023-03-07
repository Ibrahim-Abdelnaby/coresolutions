import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mash3arComponent } from './mash3ar.component';

describe('Mash3arComponent', () => {
  let component: Mash3arComponent;
  let fixture: ComponentFixture<Mash3arComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mash3arComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mash3arComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
