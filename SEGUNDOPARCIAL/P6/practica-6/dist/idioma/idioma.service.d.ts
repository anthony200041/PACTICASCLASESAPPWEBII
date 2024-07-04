import { Repository } from 'typeorm';
import { Idioma } from './entities/idioma.entity';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
export declare class IdiomaService {
    private idiomaRepository;
    constructor(idiomaRepository: Repository<Idioma>);
    create(createIdiomaDto: CreateIdiomaDto): Promise<Idioma>;
    findAll(): Promise<Idioma[]>;
    findOne(id: number): Promise<Idioma>;
    update(id: number, updateIdiomaDto: CreateIdiomaDto): Promise<Idioma>;
    remove(id: number): Promise<void>;
}
