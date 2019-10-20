import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditocartaodetrailComponent } from './creditocartaodetrail.component';

describe('CreditocartaodetrailComponent', () => {
  let component: CreditocartaodetrailComponent;
  let fixture: ComponentFixture<CreditocartaodetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditocartaodetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditocartaodetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
