import { Console } from 'console';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/models/Genero';

@Component({
  selector: 'app-listar-genero',
  templateUrl: './listar-genero.component.html',
  styleUrls: ['./listar-genero.component.css']
})
export class ListarGeneroComponent implements OnInit {

  generos!: Genero[];

  constructor(private http : HttpClient) {} 

  ngOnInit(): void {
    this.http.get<Genero[]>
    ("https://localhost:5001/api/generos/listar")
    .subscribe({
      next: (generos) => {
        for (const genero in generos) {
          console.log(genero)
          
        }
        this.generos = generos;
      }
    });
  }
}
