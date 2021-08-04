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
exports.TagenciaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const principal_service_1 = require("../../funciones/genericas/principal-service");
const tagencia_repository_1 = require("./tagencia.repository");
let TagenciaService = class TagenciaService extends principal_service_1.PrincipalServices {
    constructor(_tagenciaRepository) {
        super(_tagenciaRepository);
        this._tagenciaRepository = _tagenciaRepository;
    }
};
TagenciaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tagencia_repository_1.TagenciaRepository)),
    __metadata("design:paramtypes", [tagencia_repository_1.TagenciaRepository])
], TagenciaService);
exports.TagenciaService = TagenciaService;
//# sourceMappingURL=tagencia.service.js.map