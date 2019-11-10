import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from 'app/layouts/login-layout/login-layout.component';

import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorInterceptor } from 'app/auth/httperrorinterceptor';
import { AuthInterceptor } from './auth/auth-interceptor';
import { OrderModule } from 'ngx-order-pipe';
import { CadastroCategoriaGastoComponent } from './pages/cadastro-categoria-gasto/cadastro-categoria-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    OrderModule

  ],
  providers: [ApiService,
    {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpErrorInterceptor,
     multi: true
   },
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
