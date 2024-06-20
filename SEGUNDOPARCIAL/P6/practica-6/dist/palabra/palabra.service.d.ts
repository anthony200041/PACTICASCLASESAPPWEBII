import { Repository } from 'typeorm';
import { Palabra } from './entities/palabra.entity';
import { CreatePalabraDto } from './dto/create-palabra.dto';
export declare class PalabraService {
    private palabraRepository;
    constructor(palabraRepository: Repository<Palabra>);
    create(createPalabraDto: CreatePalabraDto): Promise<Palabra>;
    findAll(): Promise<Palabra[]>;
    findOne(id: number): Promise<Palabra>;
    update(id: number, updatePalabraDto: CreatePalabraDto): Promise<Palabra>;
    remove(id: number): Promise<void>;
}
