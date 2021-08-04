"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPEORM_CONFIG = void 0;
const entidades_tarjeta_1 = require("../constantes/entidades-tarjeta");
exports.TYPEORM_CONFIG = {
    type: 'mssql',
    host: 'localhost',
    port: 1434,
    username: 'prueba',
    password: 'vero*123456',
    database: 'ISLA29',
    schema: 'TARJETA',
    entities: entidades_tarjeta_1.ENTIDADES_TARJETA,
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map