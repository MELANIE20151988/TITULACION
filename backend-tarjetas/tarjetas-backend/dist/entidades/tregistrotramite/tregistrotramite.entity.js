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
exports.TregistrotramiteEntity = void 0;
const typeorm_1 = require("typeorm");
const tdetalle_entity_1 = require("../tdetalle/tdetalle.entity");
let TregistrotramiteEntity = class TregistrotramiteEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'IDREGISTROTRAMITE' }),
    __metadata("design:type", Number)
], TregistrotramiteEntity.prototype, "idregistrotramite", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', name: 'FECHAMODIFICACION' }),
    __metadata("design:type", Date)
], TregistrotramiteEntity.prototype, "fechamodificacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'IDESTADO' }),
    __metadata("design:type", Number)
], TregistrotramiteEntity.prototype, "idestado", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'IDENTIFICACION' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "identificacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'NOMBRE' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', name: 'SEGURO' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "seguro", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'TELEFONO' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column({ type: 'datetime', name: 'FECHASOLICITUD' }),
    __metadata("design:type", Date)
], TregistrotramiteEntity.prototype, "fechasolicitud", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'ORIGENSOLICITUD' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "origensolicitud", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'EMAIL' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', name: 'ENVIOINFORMACION' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "envioinformacion", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'NOMBREIMPRESOTARJETA' }),
    __metadata("design:type", String)
], TregistrotramiteEntity.prototype, "nombreimpresotarjeta", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', name: 'IDDETALLE' }),
    __metadata("design:type", Number)
], TregistrotramiteEntity.prototype, "iddetalle", void 0);
__decorate([
    typeorm_1.OneToOne((type) => tdetalle_entity_1.TdetalleEntity, (tregistrotramitedetalle) => tregistrotramitedetalle.FK_TREGISTROTRAMITE_TDETALLE),
    typeorm_1.JoinColumn({ name: 'IDDETALLE' }),
    __metadata("design:type", Object)
], TregistrotramiteEntity.prototype, "FK_TREGISTROTRAMITE_TDETALLE", void 0);
TregistrotramiteEntity = __decorate([
    typeorm_1.Entity('TREGISTROTRAMITE')
], TregistrotramiteEntity);
exports.TregistrotramiteEntity = TregistrotramiteEntity;
//# sourceMappingURL=tregistrotramite.entity.js.map