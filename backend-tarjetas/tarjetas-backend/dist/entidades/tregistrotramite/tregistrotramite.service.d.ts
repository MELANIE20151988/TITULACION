import { PrincipalServices } from "src/funciones/genericas/principal-service";
import { TestadotramiteRepository } from "../testadotramite/testadotramite.repository";
import { TregistrotramiteEntity } from "./tregistrotramite.entity";
export declare class TregistrotramiteService extends PrincipalServices<TregistrotramiteEntity> {
    private readonly _tregistrotramiteRepository;
    constructor(_tregistrotramiteRepository: TestadotramiteRepository);
}
