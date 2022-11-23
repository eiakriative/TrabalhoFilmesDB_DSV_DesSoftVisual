import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Ator } from 'src/app/models/ator';
import { Filme } from 'src/app/models/filme';
import { Genero } from 'src/app/models/genero';

@Component({
  selector: 'app-cadastrar-ator',
  templateUrl: './cadastrar-ator.component.html',
  styleUrls: ['./cadastrar-ator.component.css']
})
export class CadastrarAtorComponent implements OnInit {
  nome!: string;
  filmes!: Filme[];
  generos!: Genero[];
  filmeId!: number;
  generoId!: number;
  atorId!: number;
  
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
            this.http.get<Ator>(`https://localhost:5001/api/atores/buscar/${id}`)
            .subscribe({
              next: (atores) => {
                this.atorId = id!;
                this.nome = atores.nome;
               },
            });
          }
        },
      });
      this.http.get<Filme[]>("https://localhost:5001/api/filmes/listar").subscribe({
        next: (filmes) => {
          this.filmes = filmes;
        },
      });
      this.http.get<Filme[]>("https://localhost:5001/api/generos/listar").subscribe({
        next: (generos) => {
          this.generos = generos;
        },
      });
    }
  
    alterar(): void {
      console.log(this.filmeId);
      
      let ator: Ator = {
        atorId: this.atorId,
        filmeId: this.filmeId,
        generoId: this.generoId,
        nome: this.nome,
      };
  
      this.http.patch<Ator>("https://localhost:5001/api/atores/editar", ator).subscribe({
        next: (ator) => {
            this.router.navigate(["pages/ator/listar"]);
        },
      });
    }
  
    cadastrar(): void {
      console.log(this.filmeId);
  
      let ator: Ator = {
        atorId: this.atorId,
        filmeId: this.filmeId,
        generoId: this.generoId,
        nome: this.nome,
      };
  
      this.http.post<Ator>("https://localhost:5001/api/atores/cadastrar", ator).subscribe({
        next: (ator) => {
          this._snackBar.open("Ator cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
          this.router.navigate(["pages/ator/listar"]);
        },
      });
    }
  }