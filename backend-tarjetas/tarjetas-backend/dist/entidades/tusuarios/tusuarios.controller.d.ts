import { CreateDtoUser } from './dtos/create-dtos';
import { TusuarioService } from './tusuarios.service';
export declare class TusuariosController {
    private readonly _tusuariosService;
    constructor(_tusuariosService: TusuarioService);
    crearusuario(datosUsuarioCrear: CreateDtoUser): Promise<import("./tusuarios.entity").TusuariosEntity>;
}
