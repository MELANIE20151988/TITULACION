import { TdetalleServices } from './tdetalle.service';
export declare class TdetalleController {
    private readonly _tdetalleService;
    constructor(_tdetalleService: TdetalleServices);
    creardetalle(datosDetalleCrear: any): Promise<import("./tdetalle.entity").TdetalleEntity>;
}
