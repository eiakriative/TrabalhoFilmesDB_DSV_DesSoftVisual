import { Genero } from '../../../../models/Genero';
import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Console } from 'console';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-cadastrar-genero",
  templateUrl: "./cadastrar-genero.component.html",
  styleUrls: ["./cadastrar-genero.component.css"],
})
export class CadastrarGeneroComponent implements OnInit {
  nome!: string;
  mensagem!: string;
  id!: number;

  constructor(
    private http : HttpClient, 
    private router : Router, 
    private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let {id} = params;
        this.id = id;
      } 
    })
  }

  cadastrar(): void {

    let genero: Genero = {
      Id: this.id,
      nome: this.nome,
      criadoEm: "2022-01-25",
    };
    
    this.http.post<Genero>("https://localhost:5001/api/generos/cadastrar", 
    genero)
    .subscribe({
      next : (genero) => {
        this.router.navigate(["pages/genero/listar"])
      },
      error : (error) => {
        if (error.status === 400)
        {
          this.mensagem = "Algum erro de requisição ocorreu!"
        }
        else if (error.status === 0)
        {
          this.mensagem = "API não está rodando!"
        }
      }
    });
  }
}
