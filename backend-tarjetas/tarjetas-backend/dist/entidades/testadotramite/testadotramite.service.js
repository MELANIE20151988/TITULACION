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
exports.TestadotramiteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const principal_service_1 = require("../../funciones/genericas/principal-service");
const testadotramite_repository_1 = require("./testadotramite.repository");
let TestadotramiteService = class TestadotramiteService extends principal_service_1.PrincipalServices {
    constructor(_testadoRepository) {
        super(_testadoRepository);
        this._testadoRepository = _testadoRepository;
    }
    ;
};
TestadotramiteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(testadotramite_repository_1.TestadotramiteRepository)),
    __metadata("design:paramtypes", [testadotramite_repository_1.TestadotramiteRepository])
], TestadotramiteService);
exports.TestadotramiteService = TestadotramiteService;
//# sourceMappingURL=testadotramite.service.js.map