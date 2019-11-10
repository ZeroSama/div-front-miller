import { Routes } from '@angular/router';

import { CadastroComponent } from '../../pages/cadastro/cadastro.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RecuperasenhaComponent } from '../../pages/recuperasenha/recuperasenha.component';
import { GastocategorialistComponent } from 'app/pages/gastocategorialist/gastocategorialist.component';
import { CadastroCategoriaGastoComponent } from 'app/pages/cadastro-categoria-gasto/cadastro-categoria-gasto.component';


export const LoginLayoutRoutes: Routes = [
     { path: '', component: LoginComponent},
    // { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'recuperarsenha', component: RecuperasenhaComponent},
    { path: 'catgasto', component: GastocategorialistComponent},
    { path: 'cadastro-categoria-gasto', component: CadastroCategoriaGastoComponent}



];
