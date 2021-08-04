"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagenciaRepository = void 0;
const typeorm_1 = require("typeorm");
const tagencia_entity_1 = require("./tagencia.entity");
let TagenciaRepository = class TagenciaRepository extends typeorm_1.Repository {
};
TagenciaRepository = __decorate([
    typeorm_1.EntityRepository(tagencia_entity_1.TagenciaEntity)
], TagenciaRepository);
exports.TagenciaRepository = TagenciaRepository;
//# sourceMappingURL=tagencia.repository.js.map