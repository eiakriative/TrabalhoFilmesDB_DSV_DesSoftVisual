import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/genero';

@Component({
  selector: 'app-listar-generos',
  templateUrl: './listar-generos.component.html',
  styleUrls: ['./listar-generos.component.css']
})
export class ListarGenerosComponent implements OnInit {

  generos!: Genero[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //Configurando a requisição para a API
    this.http.
      get<Genero[]>(
        "https://localhost:5001/api/generos/listar"
      )
      // Executar a requisição
      .subscribe({
        next: (generos) => {
          //Executamos o que for necessário quando a requisição
          //for bem-sucedida
          this.generos = generos;
        }
      });
  } 
}
