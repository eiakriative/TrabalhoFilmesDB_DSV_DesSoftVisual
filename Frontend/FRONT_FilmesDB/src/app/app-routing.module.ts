import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarGeneroComponent } from './components/pages/genero/cadastrar-genero/cadastrar-genero.component';
import { ListarGeneroComponent } from './components/pages/genero/listar-genero/listar-genero.component';

const routes: Routes = [
  {
    path: "pages/genero/cadastrar",
    component: CadastrarGeneroComponent
  },
  {
    path: "pages/genero/listar",
    component: ListarGeneroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
