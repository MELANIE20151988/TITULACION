import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
{path:'Hola',component:LayoutComponent,
 children:[
   {path:'',loadChildren:()=>import('./solicitud-tarjeta/solicitud-tarjeta.module').then(m=>m.SolicitudTarjetaModule)}

 ]
}
, {path: '',redirectTo:'Hola',pathMatch:'full'}
,{path:'**',loadChildren:()=>import('./pagina-no-encontrada/pagina-no-encontrada.module').then(m=>m.PaginaNoEncontradaModule)

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), 


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
