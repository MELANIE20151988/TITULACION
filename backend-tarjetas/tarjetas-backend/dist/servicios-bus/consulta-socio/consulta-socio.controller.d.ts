import { ConsultaSocioService } from './consulta-socio.service';
export declare class ConsultaSocioController {
    private readonly _consultasocioService;
    constructor(_consultasocioService: ConsultaSocioService);
    consultarSocio(cedula: {
        numero: string;
    }): Promise<{
        cliIdentificacion: any;
        cliNombre1: any;
        cliNombre2: any;
        cliApellido1: any;
        cliApellido2: any;
        cliNombreCompleto: any;
        cliFechaNacimiento: any;
        cliEmail: any;
        cliCodigoCore: any;
        cliLugarNacimiento: any;
        cliCelular: any;
    }>;
}
