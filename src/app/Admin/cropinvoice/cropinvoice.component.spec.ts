import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropinvoiceComponent } from './cropinvoice.component';

describe('CropinvoiceComponent', () => {
  let component: CropinvoiceComponent;
  let fixture: ComponentFixture<CropinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropinvoiceComponent]
    });
    fixture = TestBed.createComponent(CropinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
