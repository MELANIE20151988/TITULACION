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
exports.CorreoElectronicoController = void 0;
const common_1 = require("@nestjs/common");
const correo_electronico_service_1 = require("./correo-electronico.service");
let CorreoElectronicoController = class CorreoElectronicoController {
    constructor(_consultaCorreoService) {
        this._consultaCorreoService = _consultaCorreoService;
    }
    async enviarCorreo(email) {
        try {
            console.log('Ingreso al envio Correo ');
            return this._consultaCorreoService.CorreoElectronico(email.correoSocio);
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    common_1.Post('correo'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CorreoElectronicoController.prototype, "enviarCorreo", null);
CorreoElectronicoController = __decorate([
    common_1.Controller('envio'),
    __metadata("design:paramtypes", [correo_electronico_service_1.CorreoElectronicoService])
], CorreoElectronicoController);
exports.CorreoElectronicoController = CorreoElectronicoController;
//# sourceMappingURL=correo-electronico.controller.js.map