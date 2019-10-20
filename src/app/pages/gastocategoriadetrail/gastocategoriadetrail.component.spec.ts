import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastocategoriadetrailComponent } from './gastocategoriadetrail.component';

describe('GastocategoriadetrailComponent', () => {
  let component: GastocategoriadetrailComponent;
  let fixture: ComponentFixture<GastocategoriadetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastocategoriadetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastocategoriadetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
