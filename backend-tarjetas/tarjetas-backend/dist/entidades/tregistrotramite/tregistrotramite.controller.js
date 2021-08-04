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
exports.TregistrotramiteController = void 0;
const common_1 = require("@nestjs/common");
const create_dtos_1 = require("./dtos/create-dtos");
const tregistrotramite_service_1 = require("./tregistrotramite.service");
let TregistrotramiteController = class TregistrotramiteController {
    constructor(_tregistrotramiteService) {
        this._tregistrotramiteService = _tregistrotramiteService;
    }
    async crearregistrotramite(datosRegistrotramiteCrear) {
        try {
            return await this._tregistrotramiteService.crearRegistro(datosRegistrotramiteCrear);
        }
        catch (error) {
            console.error({ error, data: datosRegistrotramiteCrear });
            throw new common_1.BadRequestException('No se creo la tabla registro');
        }
    }
};
__decorate([
    common_1.Post('crear-registroTramite'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dtos_1.CreateDtoRegistroTramite]),
    __metadata("design:returntype", Promise)
], TregistrotramiteController.prototype, "crearregistrotramite", null);
TregistrotramiteController = __decorate([
    common_1.Controller('tregistrotramite'),
    __metadata("design:paramtypes", [tregistrotramite_service_1.TregistrotramiteService])
], TregistrotramiteController);
exports.TregistrotramiteController = TregistrotramiteController;
//# sourceMappingURL=tregistrotramite.controller.js.map