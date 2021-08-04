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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagenciaEntity = void 0;
const typeorm_1 = require("typeorm");
const tdetalle_entity_1 = require("../tdetalle/tdetalle.entity");
const tusuarios_entity_1 = require("../tusuarios/tusuarios.entity");
let TagenciaEntity = class TagenciaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'IDAGENCIA' }),
    __metadata("design:type", Number)
], TagenciaEntity.prototype, "idagencia", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'DESCRIPCION' }),
    __metadata("design:type", String)
], TagenciaEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tdetalle_entity_1.TdetalleEntity, (tdetalleagencia) => tdetalleagencia.FK_TDETALLE_TAGENCIA),
    __metadata("design:type", Array)
], TagenciaEntity.prototype, "FK_TDETALLE_TAGENCIA", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tusuarios_entity_1.TusuariosEntity, (tusuarioenvio) => tusuarioenvio.FK_TAGENCIA_TUSUARIO),
    __metadata("design:type", Array)
], TagenciaEntity.prototype, "FK_TAGENCIA_TUSUARIO", void 0);
TagenciaEntity = __decorate([
    typeorm_1.Entity('TAGENCIA')
], TagenciaEntity);
exports.TagenciaEntity = TagenciaEntity;
//# sourceMappingURL=tagencia.entity.js.map