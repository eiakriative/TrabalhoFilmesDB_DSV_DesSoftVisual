import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Genero } from "src/app/models/genero";

@Component({
  selector: "app-cadastrar-genero",
  templateUrl: "./cadastrar-genero.component.html",
  styleUrls: ["./cadastrar-genero.component.css"],
})
export class CadastrarGeneroComponent implements OnInit {
  nome!: string;
  mensagem!: string;
  GenId!: number;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Genero>(`https://localhost:5001/api/generos/buscar/${id}`)
          .subscribe({
            next: (generos) => {
              this.GenId = id!;
              this.nome = generos.nome;
             },
          });
        }
      },
    });
  }

  alterar(): void {
    let genero : Genero = {
      Id: this.GenId,
      nome: this.nome,
      criadoEm: "2022-01-22: 17:00"
    };

    this.http.patch<Genero>("https://localhost:5001/api/generos/editar", genero)
    .subscribe({
      next: (genero) => {
        this.router.navigate(["pages/genero/listar"]);
      },
    });
  }

  cadastrar(): void {
    let genero: Genero = {
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