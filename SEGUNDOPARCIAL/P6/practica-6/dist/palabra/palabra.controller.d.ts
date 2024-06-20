import { PalabraService } from './palabra.service';
import { CreatePalabraDto } from './dto/create-palabra.dto';
export declare class PalabraController {
    private readonly palabraService;
    constructor(palabraService: PalabraService);
    create(createPalabraDto: CreatePalabraDto): Promise<import("./entities/palabra.entity").Palabra>;
    findAll(): Promise<import("./entities/palabra.entity").Palabra[]>;
    findOne(id: string): Promise<import("./entities/palabra.entity").Palabra>;
    update(id: string, updatePalabraDto: CreatePalabraDto): Promise<import("./entities/palabra.entity").Palabra>;
    remove(id: string): Promise<void>;
}
