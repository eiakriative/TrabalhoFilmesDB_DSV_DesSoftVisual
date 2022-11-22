import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent implements OnInit {
  filmes!: Filme[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //Configuração da requisição
    this.http
      .get<Filme[]>("https://localhost:5001/api/filmes/listar")
      // Execução da requisição
      .subscribe({
        next: (filmes) => {
          // console.table(funcionarios);
          this.filmes = filmes;
        },
      });
  }

  remover(id: number): void {
    this.http.
      delete<Filme>
      (`https://localhost:5001/api/filmes/deletar/${id}`)
      .subscribe({
        next: (funcionario) => {
          this.ngOnInit();
        },
      });
  }
}