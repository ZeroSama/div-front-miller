import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendafontelistComponent } from './rendafontelist.component';

describe('RendafontelistComponent', () => {
  let component: RendafontelistComponent;
  let fixture: ComponentFixture<RendafontelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendafontelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendafontelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
