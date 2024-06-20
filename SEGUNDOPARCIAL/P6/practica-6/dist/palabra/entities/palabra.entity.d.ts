import { Registro } from '../../registro/entities/registro.entity';
export declare class Palabra {
    id: number;
    palabra: string;
    deletreo: string;
    estado: string;
    registros: Registro[];
}
