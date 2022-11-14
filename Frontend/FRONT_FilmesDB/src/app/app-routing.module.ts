import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
