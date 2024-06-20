import { IdiomaService } from './idioma.service';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
export declare class IdiomaController {
    private readonly idiomaService;
    constructor(idiomaService: IdiomaService);
    create(createIdiomaDto: CreateIdiomaDto): Promise<import("./entities/idioma.entity").Idioma>;
    findAll(): Promise<import("./entities/idioma.entity").Idioma[]>;
    findOne(id: string): Promise<import("./entities/idioma.entity").Idioma>;
    update(id: string, updateIdiomaDto: CreateIdiomaDto): Promise<import("./entities/idioma.entity").Idioma>;
    remove(id: string): Promise<void>;
}
