import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupasfarmerComponent } from './signupasfarmer.component';

describe('SignupasfarmerComponent', () => {
  let component: SignupasfarmerComponent;
  let fixture: ComponentFixture<SignupasfarmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupasfarmerComponent]
    });
    fixture = TestBed.createComponent(SignupasfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
