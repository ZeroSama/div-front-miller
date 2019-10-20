import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontederendadetrailComponent } from './fontederendadetrail.component';

describe('FontederendadetrailComponent', () => {
  let component: FontederendadetrailComponent;
  let fixture: ComponentFixture<FontederendadetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontederendadetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontederendadetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
