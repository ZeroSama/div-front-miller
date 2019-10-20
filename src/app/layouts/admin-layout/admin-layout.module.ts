import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { GastolistComponent } from '../../pages/gastolist/gastolist.component';
import { GastocategorialistComponent } from '../../pages/gastocategorialist/gastocategorialist.component';
import { FontederendalistComponent } from '../../pages/fontederendalist/fontederendalist.component';
import { CreditocartaolistComponent } from '../../pages/creditocartaolist/creditocartaolist.component';
import { FinanciamentolistComponent } from '../../pages/financiamentolist/financiamentolist.component';

import { CreditocartaodetrailComponent } from '../../pages/creditocartaodetrail/creditocartaodetrail.component';
import { FinanciamentodetrailComponent } from '../../pages/financiamentodetrail/financiamentodetrail.component';
import { FontederendadetrailComponent } from '../../pages/fontederendadetrail/fontederendadetrail.component';
import { GastocategoriadetrailComponent }         from '../../pages/gastocategoriadetrail/gastocategoriadetrail.component';
import { GastodetrailComponent } from '../../pages/gastodetrail/gastodetrail.component';
import { UsuariodetrailComponent } from '../../pages/usuariodetrail/usuariodetrail.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    GastolistComponent,
    GastocategorialistComponent,
    FontederendalistComponent,
    CreditocartaolistComponent,
    FinanciamentolistComponent,

    CreditocartaodetrailComponent,
    FinanciamentodetrailComponent,
    FontederendadetrailComponent,
    GastocategoriadetrailComponent,
    GastodetrailComponent,
    UsuariodetrailComponent

  ]
})

export class AdminLayoutModule {}
