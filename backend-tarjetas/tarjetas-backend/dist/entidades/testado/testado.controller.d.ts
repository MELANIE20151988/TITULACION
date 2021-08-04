import { CreateDtoEstado } from './dtos/create-dto';
import { TestadoService } from './testado.service';
export declare class TestadoController {
    private readonly _testadoService;
    constructor(_testadoService: TestadoService);
    crearestado(datosEstadoCrear: CreateDtoEstado): Promise<import("./testado.entity").TestadoEntity>;
    obtenerEtadosTrajetas(): Promise<import("./testado.entity").TestadoEntity>;
}
