import { CreateDtoRegistroTramite } from './dtos/create-dtos';
import { TregistrotramiteService } from './tregistrotramite.service';
export declare class TregistrotramiteController {
    private readonly _tregistrotramiteService;
    constructor(_tregistrotramiteService: TregistrotramiteService);
    crearregistrotramite(datosRegistrotramiteCrear: CreateDtoRegistroTramite): Promise<import("./tregistrotramite.entity").TregistrotramiteEntity>;
}
