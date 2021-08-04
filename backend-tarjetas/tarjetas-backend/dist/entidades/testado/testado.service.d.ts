import { TestadoRepository } from './testado.repository';
import { TestadoEntity } from './testado.entity';
import { PrincipalServices } from "src/funciones/genericas/principal-service";
export declare class TestadoService extends PrincipalServices<TestadoEntity> {
    private readonly _testadoRepository;
    constructor(_testadoRepository: TestadoRepository);
}
