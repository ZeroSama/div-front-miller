import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastocategorialistComponent } from './gastocategorialist.component';

describe('GastocategorialistComponent', () => {
  let component: GastocategorialistComponent;
  let fixture: ComponentFixture<GastocategorialistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastocategorialistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastocategorialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
