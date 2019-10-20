import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontederendalistComponent } from './fontederendalist.component';

describe('FontederendalistComponent', () => {
  let component: FontederendalistComponent;
  let fixture: ComponentFixture<FontederendalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontederendalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontederendalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
