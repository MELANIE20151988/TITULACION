"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TusuariosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tusuarios_controller_1 = require("./tusuarios.controller");
const tusuarios_repository_1 = require("./tusuarios.repository");
const tusuarios_service_1 = require("./tusuarios.service");
let TusuariosModule = class TusuariosModule {
};
TusuariosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tusuarios_repository_1.TusuariosRepository], 'default')],
        controllers: [tusuarios_controller_1.TusuariosController],
        providers: [tusuarios_service_1.TusuarioService],
        exports: [tusuarios_service_1.TusuarioService],
    })
], TusuariosModule);
exports.TusuariosModule = TusuariosModule;
//# sourceMappingURL=tusuarios.module.js.map