"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestadoController = void 0;
const create_dto_1 = require("./dtos/create-dto");
const testado_service_1 = require("./testado.service");
const common_1 = require("@nestjs/common");
let TestadoController = class TestadoController {
    constructor(_testadoService) {
        this._testadoService = _testadoService;
    }
    async crearestado(datosEstadoCrear) {
        try {
            return await this._testadoService.crearRegistro(datosEstadoCrear);
        }
        catch (error) {
            console.error({ error, data: datosEstadoCrear });
            throw new common_1.BadRequestException('No se creo la tabla registro');
        }
    }
    async obtenerEtadosTrajetas() {
        try {
            return await this._testadoService.ListarEstadoTarjeta();
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    common_1.Post('crear-estado'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateDtoEstado]),
    __metadata("design:returntype", Promise)
], TestadoController.prototype, "crearestado", null);
__decorate([
    common_1.Get('Listar-Estados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestadoController.prototype, "obtenerEtadosTrajetas", null);
TestadoController = __decorate([
    common_1.Controller('testado'),
    __metadata("design:paramtypes", [testado_service_1.TestadoService])
], TestadoController);
exports.TestadoController = TestadoController;
//# sourceMappingURL=testado.controller.js.map