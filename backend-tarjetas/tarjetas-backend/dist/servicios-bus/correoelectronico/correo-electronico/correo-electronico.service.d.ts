import { HttpService } from '@nestjs/common';
export declare class CorreoElectronicoService {
    private readonly _httpService;
    segmento: string;
    constructor(_httpService: HttpService);
    agent: any;
    CorreoElectronico(correoSocio: string): Promise<{
        errorDescripcion: any;
    }>;
}
