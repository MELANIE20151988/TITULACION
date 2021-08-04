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
exports.TusuariosEntity = void 0;
const typeorm_1 = require("typeorm");
const tagencia_entity_1 = require("../tagencia/tagencia.entity");
let TusuariosEntity = class TusuariosEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'IDUSUARIO' }),
    __metadata("design:type", Number)
], TusuariosEntity.prototype, "idusuario", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'IDENTIFICACION' }),
    __metadata("design:type", String)
], TusuariosEntity.prototype, "identificacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'NOMBRES' }),
    __metadata("design:type", String)
], TusuariosEntity.prototype, "nombres", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'LOGIN' }),
    __metadata("design:type", String)
], TusuariosEntity.prototype, "login", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', name: 'ACTIVO' }),
    __metadata("design:type", String)
], TusuariosEntity.prototype, "activo", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'PERFIL' }),
    __metadata("design:type", Number)
], TusuariosEntity.prototype, "perfil", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'DESCRIPCIONPERFIL' }),
    __metadata("design:type", Number)
], TusuariosEntity.prototype, "descripcionperfil", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'IDAGENCIA' }),
    __metadata("design:type", Number)
], TusuariosEntity.prototype, "idagenciadenarius", void 0);
__decorate([
    typeorm_1.OneToOne((type) => tagencia_entity_1.TagenciaEntity, (tusuarioenvio) => tusuarioenvio.FK_TAGENCIA_TUSUARIO),
    typeorm_1.JoinColumn({ name: 'IDAGENCIA' }),
    __metadata("design:type", Object)
], TusuariosEntity.prototype, "FK_TAGENCIA_TUSUARIO", void 0);
TusuariosEntity = __decorate([
    typeorm_1.Entity('TUSUARIOS')
], TusuariosEntity);
exports.TusuariosEntity = TusuariosEntity;
//# sourceMappingURL=tusuarios.entity.js.map