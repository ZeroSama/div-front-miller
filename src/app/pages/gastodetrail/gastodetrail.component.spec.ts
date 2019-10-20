import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastodetrailComponent } from './gastodetrail.component';

describe('GastodetrailComponent', () => {
  let component: GastodetrailComponent;
  let fixture: ComponentFixture<GastodetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastodetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastodetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
