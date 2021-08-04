import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ModalGeneralService {

  constructor() { }


  async mensajeModalExito(mensaje: string) {
    return await Swal.fire({
      title: 'ÉXITO',
      text: mensaje.toUpperCase(),
      icon: 'success',
      confirmButtonText: 'ACEPTAR',
      allowOutsideClick: false,
      iconColor: '#8a2432',
      confirmButtonColor: '#fdc82f',
    });

  }
  
}
