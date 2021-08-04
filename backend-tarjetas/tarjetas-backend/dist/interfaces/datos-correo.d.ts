export interface DatosEnvioCorreoInterface {
    Mensaje: {
        Identificacion?: string;
        Email?: string;
        Subject?: string;
        Celular?: string;
        TipoMensaje?: string;
        Valor?: string;
    };
}
