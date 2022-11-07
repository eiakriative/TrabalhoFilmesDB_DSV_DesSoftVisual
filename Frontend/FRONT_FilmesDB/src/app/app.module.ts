import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarGeneroComponent } from './componentes/pages/genero/cadastrar-genero/cadastrar-genero.component';
import { ListarGeneroComponent } from './componentes/pages/genero/listar-genero/listar-genero.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarGeneroComponent,
    ListarGeneroComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
