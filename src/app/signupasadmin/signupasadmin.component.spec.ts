import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupasadminComponent } from './signupasadmin.component';

describe('SignupasadminComponent', () => {
  let component: SignupasadminComponent;
  let fixture: ComponentFixture<SignupasadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupasadminComponent]
    });
    fixture = TestBed.createComponent(SignupasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
