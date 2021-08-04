import { TagenciaEntity } from "../tagencia/tagencia.entity";
import { TestadoEntity } from "../testado/testado.entity";
import { TestadotramiteEntity } from "../testadotramite/testadotramite.entity";
import { TregistrotramiteEntity } from "../tregistrotramite/tregistrotramite.entity";
export declare class TdetalleEntity {
    iddetalle: number;
    identificacion: string;
    nombre: string;
    seguro: string;
    telefono: string;
    fechasolicitud: Date;
    origensolicitud: string;
    email: string;
    envioinformacion: string;
    nombreimpresotarjeta: string;
    idestado: number;
    FK_TDETALLE_TESTADO: TestadoEntity | number;
    idagencia: number;
    FK_TDETALLE_TAGENCIA: TagenciaEntity | number;
    idestadotramite: number;
    FK_TDETALLE_TESTADOTRAMITE: TestadotramiteEntity | number;
    FK_TREGISTROTRAMITE_TDETALLE: TregistrotramiteEntity[];
}
