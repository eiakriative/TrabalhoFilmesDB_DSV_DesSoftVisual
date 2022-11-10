import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarGeneroComponent } from "./components/pages/genero/cadastrar-genero/cadastrar-genero.component";
import { ListarGeneroComponent } from "./components/pages/genero/listar-genero/listar-genero.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    CadastrarGeneroComponent,
    ListarGeneroComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
