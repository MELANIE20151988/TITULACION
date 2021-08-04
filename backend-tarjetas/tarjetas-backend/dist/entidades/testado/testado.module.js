"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestadoModule = void 0;
const testado_service_1 = require("./testado.service");
const testado_repository_1 = require("./testado.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const testado_controller_1 = require("./testado.controller");
let TestadoModule = class TestadoModule {
};
TestadoModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([testado_repository_1.TestadoRepository], 'default')],
        controllers: [testado_controller_1.TestadoController],
        providers: [testado_service_1.TestadoService],
        exports: [testado_service_1.TestadoService],
    })
], TestadoModule);
exports.TestadoModule = TestadoModule;
//# sourceMappingURL=testado.module.js.map