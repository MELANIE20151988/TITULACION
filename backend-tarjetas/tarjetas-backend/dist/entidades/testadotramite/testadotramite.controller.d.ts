import { CreateDtoTramite } from './dtos/create-dtos';
import { TestadotramiteService } from './testadotramite.service';
export declare class TestadotramiteController {
    private readonly _testadotramiteService;
    constructor(_testadotramiteService: TestadotramiteService);
    crearestadotramite(datosEstadoTramiteCrear: CreateDtoTramite): Promise<import("./testadotramite.entity").TestadotramiteEntity>;
}
