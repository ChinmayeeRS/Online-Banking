import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationGeneralComponent } from './loan-application-general.component';

describe('LoanApplicationGeneralComponent', () => {
  let component: LoanApplicationGeneralComponent;
  let fixture: ComponentFixture<LoanApplicationGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanApplicationGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanApplicationGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
