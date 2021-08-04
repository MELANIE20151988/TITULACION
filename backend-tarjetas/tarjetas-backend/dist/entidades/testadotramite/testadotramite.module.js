"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestadotramiteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testadotramite_controller_1 = require("./testadotramite.controller");
const testadotramite_repository_1 = require("./testadotramite.repository");
const testadotramite_service_1 = require("./testadotramite.service");
let TestadotramiteModule = class TestadotramiteModule {
};
TestadotramiteModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([testadotramite_repository_1.TestadotramiteRepository], 'default')],
        controllers: [testadotramite_controller_1.TestadotramiteController],
        providers: [testadotramite_service_1.TestadotramiteService],
        exports: [testadotramite_service_1.TestadotramiteService],
    })
], TestadotramiteModule);
exports.TestadotramiteModule = TestadotramiteModule;
//# sourceMappingURL=testadotramite.module.js.map