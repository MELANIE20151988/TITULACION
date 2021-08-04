import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  //creamos la ruta de conexion al servicio
  segmentoEstado='testado';
  //creamos la variable global de conexion de la base del archivo envioroment
  url =`${environment.host}:${environment.port}`;
 
  //traemos la informacion del servicio
  constructor( private readonly _httpClient: HttpClient) { }

  //creacmos la funcion 
  obtenerEstados()
  {
    //variable local
    const path ='Listar-Estados';
    const Url=`${this.url}/${this.segmentoEstado}/${path}`;
    return this._httpClient.get(Url);
  }
}
