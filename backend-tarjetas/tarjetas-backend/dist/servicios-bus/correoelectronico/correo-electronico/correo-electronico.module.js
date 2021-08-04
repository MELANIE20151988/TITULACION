"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoElectronicoModule = void 0;
const common_1 = require("@nestjs/common");
const correo_electronico_controller_1 = require("./correo-electronico.controller");
const correo_electronico_service_1 = require("./correo-electronico.service");
let CorreoElectronicoModule = class CorreoElectronicoModule {
};
CorreoElectronicoModule = __decorate([
    common_1.Module({
        controllers: [correo_electronico_controller_1.CorreoElectronicoController],
        providers: [correo_electronico_service_1.CorreoElectronicoService],
        imports: [common_1.HttpModule,],
        exports: [correo_electronico_service_1.CorreoElectronicoService],
    })
], CorreoElectronicoModule);
exports.CorreoElectronicoModule = CorreoElectronicoModule;
//# sourceMappingURL=correo-electronico.module.js.map