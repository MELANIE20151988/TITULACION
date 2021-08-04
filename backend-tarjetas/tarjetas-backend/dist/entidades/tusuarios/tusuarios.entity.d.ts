import { TagenciaEntity } from "../tagencia/tagencia.entity";
export declare class TusuariosEntity {
    idusuario: number;
    identificacion: string;
    nombres: string;
    login: string;
    activo: string;
    perfil: number;
    descripcionperfil: number;
    idagenciadenarius: number;
    FK_TAGENCIA_TUSUARIO: TagenciaEntity | number;
}
