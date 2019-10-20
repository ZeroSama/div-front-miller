import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariodetrailComponent } from './usuariodetrail.component';

describe('UsuariodetrailComponent', () => {
  let component: UsuariodetrailComponent;
  let fixture: ComponentFixture<UsuariodetrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariodetrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariodetrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
