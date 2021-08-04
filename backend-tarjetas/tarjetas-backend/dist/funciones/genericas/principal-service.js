"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrincipalServices = void 0;
const common_1 = require("@nestjs/common");
class PrincipalServices {
    constructor(repository) {
        this.repository = repository;
    }
    async crearRegistro(registro) {
        try {
            return await this.repository.save(registro);
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException('Ocurrio un error');
        }
    }
    async ListarAgencias() {
        try {
            console.log('Ingreso a la consulta ListarAgencias');
            return await this.repository.find({ select: ["descripcion", "idagencia"] });
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al Generar información');
        }
    }
    async ListarEstadoTarjeta() {
        try {
            console.log('Ingreso a la consulta de ListarEstadoTarjeta');
            return await this.repository.find({ select: ["idestado", "descripcion"] });
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Error al Generar información');
        }
    }
}
exports.PrincipalServices = PrincipalServices;
//# sourceMappingURL=principal-service.js.map