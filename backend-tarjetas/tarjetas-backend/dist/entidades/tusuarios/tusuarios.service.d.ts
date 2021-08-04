import { PrincipalServices } from "src/funciones/genericas/principal-service";
import { TusuariosEntity } from "./tusuarios.entity";
import { TusuariosRepository } from "./tusuarios.repository";
export declare class TusuarioService extends PrincipalServices<TusuariosEntity> {
    private readonly _tusuariosRepository;
    constructor(_tusuariosRepository: TusuariosRepository);
}
