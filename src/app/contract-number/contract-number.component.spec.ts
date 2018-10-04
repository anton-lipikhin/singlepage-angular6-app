import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractNumberComponent } from './contract-number.component';

describe('ContractNumberComponent', () => {
  let component: ContractNumberComponent;
  let fixture: ComponentFixture<ContractNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
