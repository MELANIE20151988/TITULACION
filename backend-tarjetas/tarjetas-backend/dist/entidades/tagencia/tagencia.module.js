"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagenciaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tagencia_controller_1 = require("./tagencia.controller");
const tagencia_repository_1 = require("./tagencia.repository");
const tagencia_service_1 = require("./tagencia.service");
let TagenciaModule = class TagenciaModule {
};
TagenciaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tagencia_repository_1.TagenciaRepository], 'default')],
        controllers: [tagencia_controller_1.TagenciaController],
        providers: [tagencia_service_1.TagenciaService],
        exports: [tagencia_service_1.TagenciaService],
    })
], TagenciaModule);
exports.TagenciaModule = TagenciaModule;
//# sourceMappingURL=tagencia.module.js.map