import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { CategoriaGasto } from 'app/model/categoria-gasto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastocategorialist',
  templateUrl: './gastocategorialist.component.html',
  styleUrls: ['./gastocategorialist.component.scss']
})
export class GastocategorialistComponent implements OnInit {

  categoriasGasto: CategoriaGasto[];
  key = 'descricao'; // Define um valor padrão, para quando inicializar o componente
  reverse = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.categoriasGasto = new Array();
    this.listCategoriaGasto();
  }
  listCategoriaGasto() {
    this.apiService.listCategoriaDeGasto().subscribe(
      data => {
        console.log('primeiro');
        console.log(data);
        this.categoriasGasto = data as unknown as CategoriaGasto[];
        console.log('segundo');
        console.log(this.categoriasGasto);
      },
      error => {
        console.log(error);
      }
    )

  }
  goToCadastro() {
    this.router.navigate(['/catgasto']);
  }
  excluir(categoriaGasto: CategoriaGasto) {
    const resposta = confirm('Deseja realmente excluir a categoria \'' + categoriaGasto.descricao + '\'');
    if (resposta) {
      this.apiService.excluirCategoriaGasto(categoriaGasto.cod).subscribe(
        data => {
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
