import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  //variable globales
  //creacion de varable de segmento
    segmento='tagencia';

    // variable globales del enviroment contruccion de la url de conexion web
     url = `${environment.host}:${environment.port}`;
  //creacion de la URL
  constructor( private readonly _httpClient: HttpClient) {}

     obtenerAgencias()
        {
          //variables locales
          const path='Listar-agencia';
          const Url= `${this.url}/${this.segmento}/${path}`;
         // let header = new HttpHeaders().set('Type-content','aplication/json')
          return this._httpClient.get(Url);
        }


}
