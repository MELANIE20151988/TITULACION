import { PrincipalServices } from "src/funciones/genericas/principal-service";
import { TagenciaEntity } from "./tagencia.entity";
import { TagenciaRepository } from "./tagencia.repository";
export declare class TagenciaService extends PrincipalServices<TagenciaEntity> {
    private readonly _tagenciaRepository;
    constructor(_tagenciaRepository: TagenciaRepository);
}
