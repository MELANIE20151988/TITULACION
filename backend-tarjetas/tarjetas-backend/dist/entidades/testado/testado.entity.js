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
exports.TestadoEntity = void 0;
const typeorm_1 = require("typeorm");
const tdetalle_entity_1 = require("../tdetalle/tdetalle.entity");
let TestadoEntity = class TestadoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'IDESTADO' }),
    __metadata("design:type", Number)
], TestadoEntity.prototype, "idestado", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', name: 'DESCRIPCION' }),
    __metadata("design:type", String)
], TestadoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany((type) => tdetalle_entity_1.TdetalleEntity, (tdetalleestado) => tdetalleestado.FK_TDETALLE_TESTADO),
    __metadata("design:type", Array)
], TestadoEntity.prototype, "FK_TDETALLE_TESTADO", void 0);
TestadoEntity = __decorate([
    typeorm_1.Entity('TESTADO')
], TestadoEntity);
exports.TestadoEntity = TestadoEntity;
//# sourceMappingURL=testado.entity.js.map