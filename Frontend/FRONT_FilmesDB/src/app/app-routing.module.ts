import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { CadastrarFilmeComponent } from "./components/pages/filme/cadastrar-filme/cadastrar-filme.component";
// import { ListarFilmesComponent } from "./components/pages/filme/listar-filmes/listar-filmes.component";
import { CadastrarGeneroComponent } from "./components/pages/genero/cadastrar-genero/cadastrar-genero.component";
import { ListarGenerosComponent } from "./components/pages/genero/listar-generos/listar-generos.component";

const routes: Routes = [
  {
    path: "pages/genero/cadastrar",
    component: CadastrarGeneroComponent,
  },
  {
    path: "pages/genero/cadastrar/:id",
    component: CadastrarGeneroComponent,
  },
  {
    path: "pages/genero/listar",
    component: ListarGenerosComponent,
  },
  // {
  //   path: "pages/filme/cadastrar",
  //   component: CadastrarFilmeComponent,
  // },
  // {
  //   path: "pages/filme/listar",
  //   component: ListarFilmesComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
