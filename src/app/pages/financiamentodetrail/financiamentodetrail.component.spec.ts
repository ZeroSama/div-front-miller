import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciamentodetrailComponent } from './financiamentodetrail.component';

describe('FinanciamentodetrailComponent', () => {
  let component: FinanciamentodetrailComponent;
  let fixture: ComponentFixture<FinanciamentodetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciamentodetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciamentodetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
