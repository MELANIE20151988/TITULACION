import { CreateDtoAgencia } from './dtos/create-dtos';
import { TagenciaService } from './tagencia.service';
export declare class TagenciaController {
    private readonly _tagenciaService;
    constructor(_tagenciaService: TagenciaService);
    crearagencia(datosAgenciaCrear: CreateDtoAgencia): Promise<import("./tagencia.entity").TagenciaEntity>;
    obteneragencias(): Promise<import("./tagencia.entity").TagenciaEntity>;
}
