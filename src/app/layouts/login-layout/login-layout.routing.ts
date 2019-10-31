import { Routes } from '@angular/router';

import { CadastroComponent } from '../../pages/cadastro/cadastro.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RecuperasenhaComponent } from '../../pages/recuperasenha/recuperasenha.component';


export const LoginLayoutRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'Recuperarsenha', component: RecuperasenhaComponent}

];
