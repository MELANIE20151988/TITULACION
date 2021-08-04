import { HttpService } from '@nestjs/common';
export declare class ConsultaSocioService {
    private readonly _httpService;
    segmento: string;
    constructor(_httpService: HttpService);
    agent: any;
    ConusltarSocio(cedula: string): Promise<{
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
