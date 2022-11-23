import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ator } from 'src/app/models/ator';

@Component({
  selector: 'app-listar-ator',
  templateUrl: './listar-ator.component.html',
  styleUrls: ['./listar-ator.component.css']
})
export class ListarAtorComponent implements OnInit {
  atores!: Ator[];
  nome!: string;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      //Configuração da requisição
      this.http
        .get<Ator[]>("https://localhost:5001/api/atores/listar")
        // Execução da requisição
        .subscribe({
          next: (atores) => {
            // console.table(funcionarios);
            this.atores = atores;
          },
        });
    }

    remover(id: number): void {
      this.http.
        delete<Ator>
        (`https://localhost:5001/api/atores/deletar/${id}`)
        .subscribe({
          next: (ator) => {
            this.ngOnInit();
          },
        });
    }
  }