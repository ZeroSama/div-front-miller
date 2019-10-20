import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastolistComponent } from './gastolist.component';

describe('GastolistComponent', () => {
  let component: GastolistComponent;
  let fixture: ComponentFixture<GastolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
