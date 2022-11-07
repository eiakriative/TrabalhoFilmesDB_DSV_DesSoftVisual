import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarGeneroComponent } from './componentes/pages/genero/cadastrar-genero/cadastrar-genero.component';
import { ListarGeneroComponent } from './componentes/pages/genero/listar-genero/listar-genero.component';

const routes: Routes = [
  {
    path: "pages/genero/cadastrar-genero",
    component: CadastrarGeneroComponent
  },
  {
    path: "pages/genero/listar-genero",
    component:  ListarGeneroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
