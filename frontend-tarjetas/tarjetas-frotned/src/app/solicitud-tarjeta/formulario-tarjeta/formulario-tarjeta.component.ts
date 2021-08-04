import { SolicitudTarjetaRoutingModule } from './../solicitud-tarjeta-routing.module';
import { AgenciaService } from '../../services/entidades/agencia.service';
import {EstadoService} from '../../services/entidades/estado.service';
import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ERRORES_IDENTIFICACION } from '../../constantes/mensaje-error-usuario-password';
import { debounceTime } from 'rxjs/operators';
import { SolicitudInterface } from 'src/app/interfaces/datos-socio-interface';
import { ConsultasocioService } from 'src/app/services/rest/consultasocio.service';
import { CorreoElectronicoService } from 'src/app/services/rest/correo-electronico.service';
import { envioCorreo } from 'src/app/interfaces/correo-electornico-interface';
import {enmascararFormularioscelular, enmascararFormulariosemail} from 'src/app/funciones/funciones-genericas';
import { ModalGeneralService } from 'src/app/services/modales/modal-general.service';
@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.scss']
})
export class FormularioTarjetaComponent implements OnInit {

  //variables globales
    FormularioSocio : FormGroup;
    agencias: Array<any>=[];
    estados : Array<any>=[];
    ci ='';
    huelladactilar='';
    socioInformacion: SolicitudInterface;
    resultadoCorreo: envioCorreo;
    mensajesci: any[] = [];


  //decalramos Formularios
  //inicialización de los campos

  constructor( private readonly _agenciaServices: AgenciaService,
    private readonly  _estadoServices: EstadoService,
    private readonly _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _consultaSocioService : ConsultasocioService,
    private _enviarCorreo : CorreoElectronicoService,
    private _modales : ModalGeneralService,

    )
    {
      this.inicializarFormularioDatosSocio();



     }



    ngOnInit(): void
    {
       this.obtenerAgencias();
       this.obtenerEstados();
      // this.obtenercorreo();
       this.obtenerIdentificacion();
    }

    //Configuración de formulario inicializacion de los campos
      inicializarFormularioDatosSocio() {
        this.FormularioSocio = this._formBuilder.group({
          ci: [{value: '', disabled: false},
            [
              Validators.required,
              Validators.maxLength(10),
              Validators.minLength(10),

            ],
          ],

          huelladactilar: [{value: '', disabled: false}, [Validators.required]],
          nombresApellidos: [{value: '', disabled:true},[Validators.required]],
          celular:[{value: '', disabled:true},[Validators.required]],
          email:[{value: '', disabled:true},[Validators.required]],
          nombresApellidostarj:[{value: '', disabled:false},[Validators.required]],
          nacionalidad: [{value: 'ec', disabled:true},[Validators.required]],
          estadocivil:[{value: 'soltera', disabled:true},[Validators.required]],
          listargencias:[{value: '', disabled:false},[Validators.required]],
          listarestados:[{value: '', disabled:false},[Validators.required]],
        });
      }

      seteoParametrosIniciales() {
        this._activatedRoute.queryParams
          .subscribe((parametros: Params) => {
            this.ci = parametros.ci;

            this.huelladactilar=parametros.huelladactilar;
          });
        }
        //funciones de obtencion de cedula
        //valore ingresado cedula

        obtenerIdentificacion()
        {
            const identificacion= this.FormularioSocio.get('ci');
            identificacion.valueChanges.pipe(debounceTime(4500))
            .subscribe(cedula=>{
              //console.log(cedula);
              //this.setearMensajesCi(identificacion);
              this.obtenerInfoSocio(cedula);


            });
            return identificacion;
        }
         //obtener correo socio
         obtenercorreo()
         {
          /*console.log('INGRESO A LA FUNCION');
             const email= this.FormularioSocio.get('email');
             console.log('OBTIEN EMAIL');

             email.valueChanges.subscribe(  email=>{
             console.log(email);

               this.obtenerInfoEmail(email);
             });
             return email;*/
            // this.obtenerInfoEmail(this.socioInformacion.cliEmail); //Obtenemos la informacion del servicio
            // console.log(this.socioInformacion.cliEmail);

         }
        obtenerInfoSocio ( identificacion:string){
          console.log(identificacion);
          this._consultaSocioService.ObtenerDatosSocio(identificacion).subscribe(
             (respuest)=>{console.log(respuest);
            this.socioInformacion=respuest;
            this.seteoinfDatosSocio();
            this.seteoParametrosIniciales();});
        }

        obtenerInfoEmail ( ){

             this._enviarCorreo.enviarCorreo(this.socioInformacion.cliEmail).subscribe(
             (respuest)=>{console.log(respuest);
            this.resultadoCorreo=respuest;
            this.seteoinfDatosSocio();
            this.seteoParametrosIniciales();});
            this._modales.mensajeModalExito('LA SOLICITUD FUE ENVIADA EXITOSAMENTE');
             }

             
             //refresh(): void { window.location.reload(); }



        //Obtener Agencias
        obtenerAgencias(){

            this._agenciaServices.obtenerAgencias().subscribe((respuesta:any)=>{
              console.log(respuesta);
              this.agencias=respuesta;})
          }

          //Obtener estados
        obtenerEstados(){

          this._estadoServices.obtenerEstados().subscribe((respuestEstado:any)=>{
            console.log(respuestEstado);
            this.estados=respuestEstado;})
        }



        seteoinfDatosSocio(socio?: any)
        {

          this.FormularioSocio.get('nombresApellidos').patchValue ( this.socioInformacion.cliNombreCompleto,
            { onlySelf: true,});

            this.FormularioSocio.get('celular').patchValue(enmascararFormularioscelular(this.socioInformacion.cliCelular,'X'),
              { onlySelf: true,});

            this.FormularioSocio.get('email').patchValue(enmascararFormulariosemail (this.socioInformacion.cliEmail,'X'),
                { onlySelf: true,})
          /*this.FormularioSocio.get('celular').patchValue(this.socioInformacion.cliCelular,
              { onlySelf: true,});

          this.FormularioSocio.get('email').patchValue(this.socioInformacion.cliEmail,
                { onlySelf: true,});*/

           this.FormularioSocio.get('nombresApellidostarj').patchValue(this.socioInformacion.cliNombreCompleto,
                  { onlySelf: true,});

           //this.FormularioSocio.get('listargencias').patchValue(this.obtenerIdAgencia());

        }


  }
