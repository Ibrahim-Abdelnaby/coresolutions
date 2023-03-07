import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserTowComponent } from './login-user-tow.component';

describe('LoginUserTowComponent', () => {
  let component: LoginUserTowComponent;
  let fixture: ComponentFixture<LoginUserTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
