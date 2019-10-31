import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usuario: any; 
  constructor( private api: ApiService) { }
  //constructor(){}
  ngOnInit() {
    this.usuario = {};
  }

  login(fnm: FormGroup) {
    this.api.login(this.usuario).subscribe(resposta =>{
      console.log(resposta);
    });
     
  }
}
