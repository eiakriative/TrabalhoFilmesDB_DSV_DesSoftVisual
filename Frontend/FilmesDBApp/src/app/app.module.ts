import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { CadastrarGeneroComponent } from './components/pages/genero/cadastrar-genero/cadastrar-genero.component';
import { ListarGenerosComponent } from './components/pages/genero/listar-generos/listar-generos.component';
import { CadastrarFilmeComponent } from './components/pages/filme/cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './components/pages/filme/listar-filme/listar-filme.component';
import { CadastrarAtorComponent } from './components/pages/ator/cadastrar-ator/cadastrar-ator.component';
import { ListarAtorComponent } from './components/pages/ator/listar-ator/listar-ator.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarGeneroComponent,
    ListarGenerosComponent,
    CadastrarFilmeComponent,
    ListarFilmeComponent,
    CadastrarAtorComponent,
    ListarAtorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }
