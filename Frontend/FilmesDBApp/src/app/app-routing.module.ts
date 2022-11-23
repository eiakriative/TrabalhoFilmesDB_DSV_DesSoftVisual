import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAtorComponent } from './components/pages/ator/cadastrar-ator/cadastrar-ator.component';
import { ListarAtorComponent } from './components/pages/ator/listar-ator/listar-ator.component';
import { CadastrarFilmeComponent } from './components/pages/filme/cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './components/pages/filme/listar-filme/listar-filme.component';
import { CadastrarGeneroComponent } from './components/pages/genero/cadastrar-genero/cadastrar-genero.component';
import { ListarGenerosComponent } from './components/pages/genero/listar-generos/listar-generos.component';

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
  {
    path: "pages/filme/cadastrar",
    component: CadastrarFilmeComponent,
  },
  {
    path: "pages/filme/cadastrar/:id",
    component: CadastrarFilmeComponent,
  },
  {
    path: "pages/filme/listar",
    component: ListarFilmeComponent,
  },
  {
    path: "pages/ator/cadastrar",
    component: CadastrarAtorComponent,
  },
  {
    path: "pages/ator/cadastrar/:id",
    component: CadastrarAtorComponent,
  },
  {
    path: "pages/ator/listar",
    component: ListarAtorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
