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
exports.CorreoElectronicoService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const datos_correo_1 = require("../../../constantes/datos-correo");
const environment_1 = require("../../../environment/environment");
const datos_correo_2 = require("../../../interfaces/datos-correo");
const https = require('https');
const logger = new common_1.Logger('EnvioCorreoService');
let CorreoElectronicoService = class CorreoElectronicoService {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.segmento = 'bus29';
        this.agent = new https.Agent({
            rejectUnauthorized: false,
        });
    }
    async CorreoElectronico(correoSocio) {
        var _a;
        console.log('inigreso al path');
        const path = 'Mensajeria29';
        const url = `${environment_1.URL_BUSCORREODESARROLLO}/${this.segmento}/${path}`;
        try {
            const jsonEnviar = {
                Mensaje: {
                    Celular: datos_correo_1.CELULAR,
                    Email: correoSocio,
                    Identificacion: datos_correo_1.IDENTIFICACION,
                    Subject: datos_correo_1.ASUNTO_CORREO,
                    TipoMensaje: datos_correo_1.TIPO_MENSAJE,
                    Valor: 'Pruebas de backent envio correo',
                },
            };
            const envioCorreo = await this._httpService
                .post(url, JSON.stringify(jsonEnviar), { headers: environment_1.HEADERS_ENVIO_CORREO, })
                .pipe(operators_1.tap((r) => console.log(r.data)), operators_1.map((resultado) => {
                return resultado.data;
            }))
                .toPromise();
            console.log(envioCorreo);
            return {
                errorDescripcion: envioCorreo.errorDescripcion,
            };
        }
        catch (error) {
            const mensajeError = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.message)
                ? error.response.message
                : 'ups algo salio mal, intenten más tarde';
            console.error({
                data: { correoSocio },
                error,
            });
            throw new common_1.InternalServerErrorException(mensajeError);
        }
    }
};
CorreoElectronicoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], CorreoElectronicoService);
exports.CorreoElectronicoService = CorreoElectronicoService;
//# sourceMappingURL=correo-electronico.service.js.map