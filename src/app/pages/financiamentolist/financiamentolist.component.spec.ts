import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciamentolistComponent } from './financiamentolist.component';

describe('FinanciamentolistComponent', () => {
  let component: FinanciamentolistComponent;
  let fixture: ComponentFixture<FinanciamentolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciamentolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciamentolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
