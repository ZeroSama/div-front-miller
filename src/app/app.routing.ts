import { Routes } from '@angular/router';

import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from 'app/layouts/login-layout/login-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    // component: AdminLayoutComponent,
    component: LoginLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/login-layout/login-layout.module#LoginLayoutModule'
      // loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'admin',
     component: AdminLayoutComponent,
    children: [
        {
      path: 'admin',
      // loadChildren: './layouts/login-layout/login-layout.module#LoginLayoutModule'
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }



]
