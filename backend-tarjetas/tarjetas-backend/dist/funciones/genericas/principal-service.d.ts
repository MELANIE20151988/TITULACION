export declare class PrincipalServices<T> {
    private repository;
    constructor(repository: any);
    crearRegistro(registro: any): Promise<T>;
    ListarAgencias(): Promise<T>;
    ListarEstadoTarjeta(): Promise<T>;
}
