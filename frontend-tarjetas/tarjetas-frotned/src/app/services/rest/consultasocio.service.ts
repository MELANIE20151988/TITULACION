import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudInterface } from 'src/app/interfaces/datos-socio-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasocioService {

  //creamos la ruta de conexion
  segmetoSocio='consulta-socio';
  //creasmos la varible de conexion 
  url = `${environment.host}:${environment.port}/${this.segmetoSocio}`;
  //conectamos el servicio htt
  constructor (private readonly _httpClient: HttpClient) { }
  
  //creamos la funcion de obtener cliente
 ObtenerDatosSocio (identificacion:string)
  {
    //conexion servicio
    const path = 'consultarSocio';
    const uri =`${this.url}/${path}`;
  
    //creamos el json
    //const jsobtenerSocio ={cliIdentificacion:identificacion};
     return this._httpClient.post<SolicitudInterface>(uri,{numero:identificacion});
    
    
    
  }
}
