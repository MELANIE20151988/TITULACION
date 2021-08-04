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
exports.TdetalleController = void 0;
const common_1 = require("@nestjs/common");
const tdetalle_service_1 = require("./tdetalle.service");
let TdetalleController = class TdetalleController {
    constructor(_tdetalleService) {
        this._tdetalleService = _tdetalleService;
    }
    async creardetalle(datosDetalleCrear) {
        console.log(datosDetalleCrear);
        try {
            return await this._tdetalleService.crearRegistro(datosDetalleCrear);
        }
        catch (error) {
            console.error({ error, data: datosDetalleCrear });
            throw new common_1.BadRequestException('No se creo la tabla registro');
        }
    }
};
__decorate([
    common_1.Post('crear-detalle'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TdetalleController.prototype, "creardetalle", null);
TdetalleController = __decorate([
    common_1.Controller('tdetalle'),
    __metadata("design:paramtypes", [tdetalle_service_1.TdetalleServices])
], TdetalleController);
exports.TdetalleController = TdetalleController;
//# sourceMappingURL=tdetalle.controller.js.map