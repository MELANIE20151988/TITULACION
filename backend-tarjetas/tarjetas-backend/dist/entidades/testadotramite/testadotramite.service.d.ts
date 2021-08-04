import { PrincipalServices } from "src/funciones/genericas/principal-service";
import { TestadotramiteEntity } from "./testadotramite.entity";
import { TestadotramiteRepository } from "./testadotramite.repository";
export declare class TestadotramiteService extends PrincipalServices<TestadotramiteEntity> {
    private readonly _testadoRepository;
    constructor(_testadoRepository: TestadotramiteRepository);
}
