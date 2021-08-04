"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaSocioModule = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const consulta_socio_controller_1 = require("./consulta-socio.controller");
const consulta_socio_service_1 = require("./consulta-socio.service");
let ConsultaSocioModule = class ConsultaSocioModule {
};
ConsultaSocioModule = __decorate([
    common_2.Module({
        controllers: [consulta_socio_controller_1.ConsultaSocioController],
        providers: [consulta_socio_service_1.ConsultaSocioService],
        imports: [
            common_1.HttpModule,
        ],
        exports: [consulta_socio_service_1.ConsultaSocioService],
    })
], ConsultaSocioModule);
exports.ConsultaSocioModule = ConsultaSocioModule;
//# sourceMappingURL=consulta-socio.module.js.map