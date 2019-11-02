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
import { LoginComponent } from 'app/pages/login/login.component';


export const AdminLayoutRoutes: Routes = [
    { path: '/#/admin/gastolist', component: GastolistComponent},
    { path: 'admin/gastocategorialist', component: GastocategorialistComponent},
    { path: 'admin/fontederendalist', component: FontederendalistComponent},
    { path: 'admin/creditocartaolist', component: CreditocartaolistComponent},
    { path: 'admin/financiamentolist', component: FinanciamentolistComponent},

    { path: 'creditocartaodetrail', component: CreditocartaodetrailComponent},
    { path: 'financiamentodetrail', component: FinanciamentodetrailComponent},
    { path: 'fontederendadetrail', component: FontederendadetrailComponent},
    { path: 'gastocategoriadetrail', component: GastocategoriadetrailComponent},
    { path: 'Gastodetrail', component: GastodetrailComponent},
    { path: 'usuariodetrail', component: UsuariodetrailComponent},
    { path: 'login', component: LoginComponent}
];
