import { EntityRepository, Repository } from 'typeorm';
import { DispositivoDeComunicacion } from './dispositivo_comu.entity';

@EntityRepository(DispositivoDeComunicacion)
export class DispositivoDeComunicacionRepository extends Repository<DispositivoDeComunicacion> {}
