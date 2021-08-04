"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TdetalleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tdetalle_controller_1 = require("./tdetalle.controller");
const tdetalle_repository_1 = require("./tdetalle.repository");
const tdetalle_service_1 = require("./tdetalle.service");
let TdetalleModule = class TdetalleModule {
};
TdetalleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([tdetalle_repository_1.TdetalleRepository], 'default')],
        controllers: [tdetalle_controller_1.TdetalleController],
        providers: [tdetalle_service_1.TdetalleServices],
        exports: [tdetalle_service_1.TdetalleServices],
    })
], TdetalleModule);
exports.TdetalleModule = TdetalleModule;
//# sourceMappingURL=tdetalle.module.js.map