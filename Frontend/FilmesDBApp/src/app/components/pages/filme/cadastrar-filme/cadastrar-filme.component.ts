import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Genero } from 'src/app/models/genero';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {
  nome!: string;
  data!: string;
  generos!: Genero[];
  generoId!: number;

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.http.get<Genero[]>("https://localhost:5001/api/generos/listar").subscribe({
      next: (generos) => {
        this.generos = generos;
      },
    });
  }

  cadastrar(): void {
    console.log(this.generoId);
    let dataConvertida = new Date(this.data);

    let filme: Filme = {
      generoId:this.generoId,
      nome: this.nome,
      ano: dataConvertida.getFullYear(),
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