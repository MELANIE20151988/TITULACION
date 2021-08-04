import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AgenciaService } from './services/entidades/agencia.service';
import { EstadoService } from './services/entidades/estado.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //importamos el http para consumir el backent
    HttpClientModule,
    //importamos formm module para usuar iterpolacion en
    FormsModule,
    //importamo el formulario reactivo
    ReactiveFormsModule,
    //enmaascaramiento
    TextMaskModule
  ],
  providers: [
    //importa los agencias
    AgenciaService,
    EstadoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
