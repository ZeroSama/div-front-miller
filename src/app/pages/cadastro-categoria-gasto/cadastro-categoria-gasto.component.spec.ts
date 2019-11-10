import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCategoriaGastoComponent } from './cadastro-categoria-gasto.component';

describe('CadastroCategoriaGastoComponent', () => {
  let component: CadastroCategoriaGastoComponent;
  let fixture: ComponentFixture<CadastroCategoriaGastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCategoriaGastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCategoriaGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
