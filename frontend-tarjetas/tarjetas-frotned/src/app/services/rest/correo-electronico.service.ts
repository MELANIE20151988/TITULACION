import { envioCorreo } from './../../interfaces/correo-electornico-interface';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CorreoElectronicoService {

  //creamos ruta
  segmetoCorreo='envio';
  //creamos la variable
  url=  `${environment.host}:${environment.port}/${this.segmetoCorreo}`;

  constructor(
    private readonly _hhtpCorreo : HttpClient
  )
  { }

  // creamos la funcion envio correo
  enviarCorreo(email)
  {
    const path = 'correo';
    const uri = `${this.url}/${path}`;
    //obtenemos informacion
    return this._hhtpCorreo.post<envioCorreo>(uri,{correoSocio:email})

  }

}
