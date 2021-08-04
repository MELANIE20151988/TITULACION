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
exports.ConsultaSocioController = void 0;
const consulta_socio_service_1 = require("./consulta-socio.service");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let ConsultaSocioController = class ConsultaSocioController {
    constructor(_consultasocioService) {
        this._consultasocioService = _consultasocioService;
    }
    async consultarSocio(cedula) {
        console.log(cedula);
        try {
            return this._consultasocioService.ConusltarSocio(cedula.numero);
        }
        catch (error) {
            console.log('Usuario no encontrado controlador', error);
        }
    }
};
__decorate([
    common_2.Post('consultarSocio'),
    __param(0, common_3.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsultaSocioController.prototype, "consultarSocio", null);
ConsultaSocioController = __decorate([
    common_1.Controller('consulta-socio'),
    __metadata("design:paramtypes", [consulta_socio_service_1.ConsultaSocioService])
], ConsultaSocioController);
exports.ConsultaSocioController = ConsultaSocioController;
//# sourceMappingURL=consulta-socio.controller.js.map