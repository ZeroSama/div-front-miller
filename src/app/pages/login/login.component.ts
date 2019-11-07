import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'app/auth/auth-service.service';
import { TokenStorageService } from 'app/auth/token-storage.service';
import { AuthLoginInfo } from 'app/auth/auth-login-info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  usuarioTemp: AuthLoginInfo;
  loginForm: FormGroup;
  constructor( private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit() {
    this.usuarioTemp = {
      "email":'',
      "senha": ''
    };
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      console.log("Pegou o token");
      console.log(this.tokenStorage.getToken());
      this.router.navigate(['/admin']);
    }
  }

  login() {
    this.authService.attemptAuth(this.usuarioTemp).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.reloadPage();
        console.log(data);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        alert(error.msg);
        this.isLoginFailed = true;
      }
    );
  }
   reloadPage() {
    window.location.reload();
  }
  logout() {
    this.tokenStorage.signOut();
  }
}
