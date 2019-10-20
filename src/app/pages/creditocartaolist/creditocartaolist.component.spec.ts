import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditocartaolistComponent } from './creditocartaolist.component';

describe('CreditocartaolistComponent', () => {
  let component: CreditocartaolistComponent;
  let fixture: ComponentFixture<CreditocartaolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditocartaolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditocartaolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
