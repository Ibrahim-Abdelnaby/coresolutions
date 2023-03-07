import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserOneComponent } from './login-user-one.component';

describe('LoginUserOneComponent', () => {
  let component: LoginUserOneComponent;
  let fixture: ComponentFixture<LoginUserOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginUserOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
