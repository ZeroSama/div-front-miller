import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'app/api.service';
import { Usuario } from 'app/model/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  usuario: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.usuario = {};
  }

  cadastro() {
    this.api.cadastraUsuario(this.usuario).subscribe(resposta => {
      console.log(resposta);
    });

  }
}
