import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth-service.service';
import { SignUpInfo } from 'app/auth/sign-up-info';
import { AuthLoginInfo } from 'app/auth/auth-login-info';
import { TokenStorageService } from 'app/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
form: any = {};
  signupInfo: SignUpInfo;
  authLoginInfo: AuthLoginInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.signupInfo = {
      "nome":'',
      "email":'',
      "senha": ''
    };
    if (this.tokenStorage.getToken()) {
      console.log(this.tokenStorage.getToken());
      this.router.navigate(['/admin']);
    }
  }

  onSubmit() {
    console.log(this.form);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.authLoginInfo = new AuthLoginInfo(this.signupInfo.email, this.signupInfo.senha);
        this.authService.attemptAuth(this.authLoginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        window.location.reload();
        console.log(data);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        alert(error.msg);
      });
      },
      error => {
        this.isSignUpFailed = true;
      }
    );
  }
}
