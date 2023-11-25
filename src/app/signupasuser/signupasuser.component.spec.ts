import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupasuserComponent } from './signupasuser.component';

describe('SignupasuserComponent', () => {
  let component: SignupasuserComponent;
  let fixture: ComponentFixture<SignupasuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupasuserComponent]
    });
    fixture = TestBed.createComponent(SignupasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
