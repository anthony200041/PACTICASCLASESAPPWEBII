import { Idioma } from '../../idioma/entities/idioma.entity';
import { Palabra } from '../../palabra/entities/palabra.entity';
export declare class Registro {
    id: number;
    deletreo: string;
    silabas: string;
    fonetica: string;
    estado: string;
    idioma: Idioma;
    palabra: Palabra;
}
