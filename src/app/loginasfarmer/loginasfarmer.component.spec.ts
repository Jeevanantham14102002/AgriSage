import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginasfarmerComponent } from './loginasfarmer.component';

describe('LoginasfarmerComponent', () => {
  let component: LoginasfarmerComponent;
  let fixture: ComponentFixture<LoginasfarmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginasfarmerComponent]
    });
    fixture = TestBed.createComponent(LoginasfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
