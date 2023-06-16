import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetailscustComponent } from './loandetailscust.component';

describe('LoandetailscustComponent', () => {
  let component: LoandetailscustComponent;
  let fixture: ComponentFixture<LoandetailscustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoandetailscustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoandetailscustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
