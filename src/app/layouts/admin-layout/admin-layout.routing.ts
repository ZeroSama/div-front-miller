import { Routes } from '@angular/router';

import { GastolistComponent } from '../../pages/gastolist/gastolist.component';
import { GastocategorialistComponent } from '../../pages/gastocategorialist/gastocategorialist.component';
import { FontederendalistComponent } from '../../pages/fontederendalist/fontederendalist.component';
import { CreditocartaolistComponent } from '../../pages/creditocartaolist/creditocartaolist.component';
import { FinanciamentolistComponent } from '../../pages/financiamentolist/financiamentolist.component';

import { CreditocartaodetrailComponent } from '../../pages/creditocartaodetrail/creditocartaodetrail.component';
import { FinanciamentodetrailComponent } from '../../pages/financiamentodetrail/financiamentodetrail.component';
import { FontederendadetrailComponent } from '../../pages/fontederendadetrail/fontederendadetrail.component';
import { GastocategoriadetrailComponent } from '../../pages/gastocategoriadetrail/gastocategoriadetrail.component';
import { GastodetrailComponent } from '../../pages/gastodetrail/gastodetrail.component';
import { UsuariodetrailComponent } from '../../pages/usuariodetrail/usuariodetrail.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'gastolist', component: GastolistComponent},
    { path: 'gastocategorialist', component: GastocategorialistComponent},
    { path: 'fontederendalist', component: FontederendalistComponent},
    { path: 'creditocartaolist', component: CreditocartaolistComponent},
    { path: 'financiamentolist', component: FinanciamentolistComponent},

    { path: 'creditocartaodetrail', component: CreditocartaodetrailComponent},
    { path: 'financiamentodetrail', component: FinanciamentodetrailComponent},
    { path: 'fontederendadetrail', component: FontederendadetrailComponent},
    { path: 'gastocategoriadetrail', component: GastocategoriadetrailComponent},
    { path: 'Gastodetrail', component: GastodetrailComponent},
    { path: 'usuariodetrail', component: UsuariodetrailComponent}
];
