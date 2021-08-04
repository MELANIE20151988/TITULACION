"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODULOS_TARJETA = void 0;
const tusuarios_module_1 = require("./../entidades/tusuarios/tusuarios.module");
const tagencia_module_1 = require("./../entidades/tagencia/tagencia.module");
const tregistrotramite_module_1 = require("./../entidades/tregistrotramite/tregistrotramite.module");
const testadotramite_module_1 = require("./../entidades/testadotramite/testadotramite.module");
const tdetalle_module_1 = require("./../entidades/tdetalle/tdetalle.module");
const consulta_socio_module_1 = require("./../servicios-bus/consulta-socio/consulta-socio.module");
const testado_module_1 = require("./../entidades/testado/testado.module");
const correo_electronico_module_1 = require("../servicios-bus/correoelectronico/correo-electronico/correo-electronico.module");
exports.MODULOS_TARJETA = [
    testado_module_1.TestadoModule,
    testadotramite_module_1.TestadotramiteModule,
    tregistrotramite_module_1.TregistrotramiteModule,
    tagencia_module_1.TagenciaModule,
    tusuarios_module_1.TusuariosModule,
    tdetalle_module_1.TdetalleModule,
    consulta_socio_module_1.ConsultaSocioModule,
    correo_electronico_module_1.CorreoElectronicoModule,
];
//# sourceMappingURL=modulos.tarjeta.js.map