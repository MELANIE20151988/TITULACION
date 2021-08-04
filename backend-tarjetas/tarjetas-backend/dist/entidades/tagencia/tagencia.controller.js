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
exports.TagenciaController = void 0;
const common_1 = require("@nestjs/common");
const create_dtos_1 = require("./dtos/create-dtos");
const tagencia_service_1 = require("./tagencia.service");
let TagenciaController = class TagenciaController {
    constructor(_tagenciaService) {
        this._tagenciaService = _tagenciaService;
    }
    async crearagencia(datosAgenciaCrear) {
        try {
            return await this._tagenciaService.crearRegistro(datosAgenciaCrear);
        }
        catch (error) {
            console.error({ error, data: datosAgenciaCrear });
            throw new common_1.BadRequestException('No se creo la tabla registro');
        }
    }
    async obteneragencias() {
        try {
            return await this._tagenciaService.ListarAgencias();
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    common_1.Post('crear-agencia'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dtos_1.CreateDtoAgencia]),
    __metadata("design:returntype", Promise)
], TagenciaController.prototype, "crearagencia", null);
__decorate([
    common_1.Get('Listar-agencia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagenciaController.prototype, "obteneragencias", null);
TagenciaController = __decorate([
    common_1.Controller('tagencia'),
    __metadata("design:paramtypes", [tagencia_service_1.TagenciaService])
], TagenciaController);
exports.TagenciaController = TagenciaController;
//# sourceMappingURL=tagencia.controller.js.map