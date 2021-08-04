import { TdetalleEntity } from "../tdetalle/tdetalle.entity";
import { TusuariosEntity } from "../tusuarios/tusuarios.entity";
export declare class TagenciaEntity {
    idagencia?: number;
    descripcion?: string;
    FK_TDETALLE_TAGENCIA: TdetalleEntity[];
    FK_TAGENCIA_TUSUARIO: TusuariosEntity[];
}
