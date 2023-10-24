import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginforpageComponent } from './loginforpage.component';

describe('LoginforpageComponent', () => {
  let component: LoginforpageComponent;
  let fixture: ComponentFixture<LoginforpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginforpageComponent]
    });
    fixture = TestBed.createComponent(LoginforpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
