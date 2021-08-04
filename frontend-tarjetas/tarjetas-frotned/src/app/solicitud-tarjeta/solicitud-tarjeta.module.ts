import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudTarjetaRoutingModule } from './solicitud-tarjeta-routing.module';
import { FormularioTarjetaComponent } from './formulario-tarjeta/formulario-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    FormularioTarjetaComponent
  ],
  imports: [
    CommonModule,
    SolicitudTarjetaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgxMaskModule.forRoot(),
  ]
})
export class SolicitudTarjetaModule { }
