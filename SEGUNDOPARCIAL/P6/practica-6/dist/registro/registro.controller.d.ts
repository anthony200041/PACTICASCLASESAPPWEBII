import { RegistroService } from './registro.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
export declare class RegistroController {
    private readonly registroService;
    constructor(registroService: RegistroService);
    create(createRegistroDto: CreateRegistroDto): Promise<import("./entities/registro.entity").Registro>;
    findAll(): Promise<import("./entities/registro.entity").Registro[]>;
    findOne(id: string): Promise<import("./entities/registro.entity").Registro>;
    update(id: string, updateRegistroDto: CreateRegistroDto): Promise<import("./entities/registro.entity").Registro>;
    remove(id: string): Promise<void>;
}
