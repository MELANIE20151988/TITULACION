import { CorreoElectronicoService } from './correo-electronico.service';
export declare class CorreoElectronicoController {
    private readonly _consultaCorreoService;
    constructor(_consultaCorreoService: CorreoElectronicoService);
    enviarCorreo(email: {
        correoSocio: string;
    }): Promise<{
        errorDescripcion: any;
    }>;
}
