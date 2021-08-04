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
exports.TdetalleEntity = void 0;
const typeorm_1 = require("typeorm");
const tagencia_entity_1 = require("../tagencia/tagencia.entity");
const testado_entity_1 = require("../testado/testado.entity");
const testadotramite_entity_1 = require("../testadotramite/testadotramite.entity");
const tregistrotramite_entity_1 = require("../tregistrotramite/tregistrotramite.entity");
let TdetalleEntity = class TdetalleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'IDDETALLE' }),
    __metadata("design:type", Number)
], TdetalleEntity.prototype, "iddetalle", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'IDENTIFICACION' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "identificacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'NOMBRE' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', name: 'SEGURO' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "seguro", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'TELEFONO' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', name: 'FECHASOLICITUD' }),
    __metadata("design:type", Date)
], TdetalleEntity.prototype, "fechasolicitud", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'ORIGENSOLICITUD' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "origensolicitud", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'EMAIL' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', name: 'ENVIOINFORMACION' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "envioinformacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'NOMBREIMPRESOTARJETA' }),
    __metadata("design:type", String)
], TdetalleEntity.prototype, "nombreimpresotarjeta", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'IDESTADO' }),
    __metadata("design:type", Number)
], TdetalleEntity.prototype, "idestado", void 0);
__decorate([
    typeorm_1.OneToOne((type) => testado_entity_1.TestadoEntity, (tdetalleagencia) => tdetalleagencia.FK_TDETALLE_TESTADO),
    typeorm_1.JoinColumn({ name: 'IDESTADO' }),
    __metadata("design:type", Object)
], TdetalleEntity.prototype, "FK_TDETALLE_TESTADO", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'IDAGENCIA' }),
    __metadata("design:type", Number)
], TdetalleEntity.prototype, "idagencia", void 0);
__decorate([
    typeorm_1.OneToOne((type) => tagencia_entity_1.TagenciaEntity, (tdetalleagencia) => tdetalleagencia.FK_TDETALLE_TAGENCIA),
    typeorm_1.JoinColumn({ name: 'IDAGENCIA' }),
    __metadata("design:type", Object)
], TdetalleEntity.prototype, "FK_TDETALLE_TAGENCIA", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'IDESTADOTRAMITE' }),
    __metadata("design:type", Number)
], TdetalleEntity.prototype, "idestadotramite", void 0);
__decorate([
    typeorm_1.OneToOne((type) => testadotramite_entity_1.TestadotramiteEntity, (tdetalleestadotramite) => tdetalleestadotramite.FK_TDETALLE_TESTADOTRAMITE),
    typeorm_1.JoinColumn({ name: 'IDESTADOTRAMITE' }),
    __metadata("design:type", Object)
], TdetalleEntity.prototype, "FK_TDETALLE_TESTADOTRAMITE", void 0);
__decorate([
    typeorm_1.OneToOne((type) => tregistrotramite_entity_1.TregistrotramiteEntity, (tregistrotramitedetalle) => tregistrotramitedetalle.FK_TREGISTROTRAMITE_TDETALLE),
    __metadata("design:type", Array)
], TdetalleEntity.prototype, "FK_TREGISTROTRAMITE_TDETALLE", void 0);
TdetalleEntity = __decorate([
    typeorm_1.Entity('TDETALLE')
], TdetalleEntity);
exports.TdetalleEntity = TdetalleEntity;
//# sourceMappingURL=tdetalle.entity.js.map