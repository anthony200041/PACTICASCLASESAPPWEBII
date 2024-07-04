import { Repository } from 'typeorm';
import { Registro } from './entities/registro.entity';
import { CreateRegistroDto } from './dto/create-registro.dto';
export declare class RegistroService {
    private registroRepository;
    constructor(registroRepository: Repository<Registro>);
    create(createRegistroDto: CreateRegistroDto): Promise<Registro>;
    findAll(): Promise<Registro[]>;
    findOne(id: number): Promise<Registro>;
    update(id: number, updateRegistroDto: CreateRegistroDto): Promise<Registro>;
    remove(id: number): Promise<void>;
}
