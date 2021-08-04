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
exports.ConsultaSocioService = void 0;
const environment_1 = require("./../../environment/environment");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const https = require('https');
let ConsultaSocioService = class ConsultaSocioService {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.segmento = 'bus29';
        this.agent = new https.Agent({
            rejectUnauthorized: false,
        });
    }
    async ConusltarSocio(cedula) {
        var _a, _b, _c, _d, _e;
        const path = 'ResetUser/ConsultaCliente';
        const url = `${environment_1.URL_BUS}/${this.segmento}/${path}`;
        const jsenvio = {
            cliIdentificacion: cedula,
        };
        try {
            const socioencontrado = await this._httpService.post(url, JSON.stringify(jsenvio), {
                httpsAgent: this.agent,
            })
                .pipe(operators_1.map((respuesta) => {
                return respuesta.data;
            })).toPromise();
            console.log(socioencontrado);
            return { cliIdentificacion: socioencontrado.cliIdentificacion,
                cliNombre1: socioencontrado.cliNombre1,
                cliNombre2: socioencontrado.cliNombre2,
                cliApellido1: socioencontrado.cliApellido1,
                cliApellido2: socioencontrado.cliApellido2,
                cliNombreCompleto: socioencontrado.cliNombreCompleto,
                cliFechaNacimiento: socioencontrado.cliFechaNacimiento,
                cliEmail: socioencontrado.cliEmail,
                cliCodigoCore: socioencontrado.cliCodigoCore,
                cliLugarNacimiento: socioencontrado.cliLugarNacimiento,
                cliCelular: socioencontrado.cliCelular,
            };
        }
        catch (error) {
            console.error('Error usuario no se cuentra servicio', { error: (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data, data: jsenvio });
            common_1.Logger.error((_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.errorDescripcion);
            throw new common_1.InternalServerErrorException((_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.errorDescripcion);
        }
    }
};
ConsultaSocioService = __decorate([
    common_2.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], ConsultaSocioService);
exports.ConsultaSocioService = ConsultaSocioService;
//# sourceMappingURL=consulta-socio.service.js.map