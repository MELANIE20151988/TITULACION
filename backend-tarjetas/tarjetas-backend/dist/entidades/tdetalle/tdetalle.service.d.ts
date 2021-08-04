import { PrincipalServices } from "src/funciones/genericas/principal-service";
import { TdetalleEntity } from "./tdetalle.entity";
import { TdetalleRepository } from "./tdetalle.repository";
export declare class TdetalleServices extends PrincipalServices<TdetalleEntity> {
    private readonly _tdetalleRepository;
    constructor(_tdetalleRepository: TdetalleRepository);
}
