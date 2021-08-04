import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioTarjetaComponent } from './formulario-tarjeta/formulario-tarjeta.component';

const routes: Routes = [
{path:'Solicitud',component: FormularioTarjetaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudTarjetaRoutingModule { }
