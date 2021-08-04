import { TdetalleEntity } from "../tdetalle/tdetalle.entity";
export declare class TregistrotramiteEntity {
    idregistrotramite?: number;
    fechamodificacion: Date;
    idestado: number;
    identificacion: string;
    nombre: string;
    seguro: string;
    telefono: string;
    fechasolicitud: Date;
    origensolicitud: string;
    email: string;
    envioinformacion: string;
    nombreimpresotarjeta: string;
    iddetalle: number;
    FK_TREGISTROTRAMITE_TDETALLE: TdetalleEntity | number;
}
