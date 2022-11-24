import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Genero } from 'src/app/models/genero';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {
  nome!: string;
  ano!: number;
  generos!: Genero[];
  generoId!: number;
  filmeId!: number;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute, 
    private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Filme>(`https://localhost:5001/api/filmes/buscar/${id}`)
          .subscribe({
            next: (filmes) => {
              this.filmeId = id!;
              this.nome = filmes.nome;
             },
          });
        }
      },
    });
    this.http.get<Genero[]>("https://localhost:5001/api/generos/listar").subscribe({
      next: (generos) => {
        this.generos = generos;
      },
    });
  }

  alterar(): void {
    console.log(this.filmeId);

    let filme: Filme = {
     filmeId: this.filmeId,
      generoId: this.generoId,
      nome: this.nome,
      ano: this.ano
    };
    this.http.patch<Filme>("https://localhost:5001/api/filmes/editar", filme).subscribe({
      next: (filme) => {
          this.router.navigate(["pages/filme/listar"]);
      },
    });
  }

  cadastrar(): void {
    console.log(this.generoId);
   
    let filme: Filme = {
      filmeId: this.filmeId,
      generoId: this.generoId,
      nome: this.nome,
      ano: this.ano
    };

    this.http.post<Filme>("https://localhost:5001/api/filmes/cadastrar", filme).subscribe({
      next: (filme) => {
        this._snackBar.open("Filme cadastrado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/filme/listar"]);
      },
    });
  }
}