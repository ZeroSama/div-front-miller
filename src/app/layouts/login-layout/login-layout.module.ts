import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginLayoutRoutes } from './login-layout.routing';

import { CadastroComponent } from '../../pages/cadastro/cadastro.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RecuperasenhaComponent } from '../../pages/recuperasenha/recuperasenha.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GastocategorialistComponent } from 'app/pages/gastocategorialist/gastocategorialist.component';
import { CadastroCategoriaGastoComponent } from 'app/pages/cadastro-categoria-gasto/cadastro-categoria-gasto.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    CadastroComponent,
    LoginComponent,
    RecuperasenhaComponent,
    GastocategorialistComponent,
    CadastroCategoriaGastoComponent
  ]
})

export class LoginLayoutModule {}
