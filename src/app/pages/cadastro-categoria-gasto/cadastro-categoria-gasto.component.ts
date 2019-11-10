import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service'
import { CategoriaGasto } from 'app/model/categoria-gasto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-categoria-gasto',
  templateUrl: './cadastro-categoria-gasto.component.html',
  styleUrls: ['./cadastro-categoria-gasto.component.scss']
})
export class CadastroCategoriaGastoComponent implements OnInit {

  categoriaGasto: CategoriaGasto = new CategoriaGasto();
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  cadastrar() {
    this.apiService.cadastroCategoriaGasto(this.categoriaGasto).subscribe(
      data => {
        console.log('A categoria ' + data.descricao + ' foi cadastrada com sucesso!');
        const decisao = confirm('A categoria ' + data.descricao + ' foi cadastrada com sucesso!\n Deseja realizar novo cadastro?');
        if (!decisao) {
          this.router.navigate(['/catgasto']);
        }
      },
      error => {
        console.log(error);
      }
    ); }
}
