import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { DispositivoDeComunicacionService } from './dispositivo_comu.service';
import { DispositivoDeComunicacion } from './dispositivo_comu.entity';
import { CreateDispositivoInput } from './dto/create-dispositivo.input';

@Resolver(of => DispositivoDeComunicacion)
export class DispositivoDeComunicacionResolver {
  constructor(private readonly service: DispositivoDeComunicacionService) {}

  @Query(returns => [DispositivoDeComunicacion])
  async dispositivos(): Promise<DispositivoDeComunicacion[]> {
    return this.service.findAll();
  }

  @Query(returns => DispositivoDeComunicacion, { nullable: true })
  async dispositivo(@Args('id') id: number): Promise<DispositivoDeComunicacion> {
    return this.service.findOne(id);
  }

  @Query(returns => DispositivoDeComunicacion, { nullable: true })
  async dispositivoPorCodigo(@Args('codigo') codigo: string): Promise<DispositivoDeComunicacion> {
    return this.service.findByCodigo(codigo);
  }

  @Query(returns => [DispositivoDeComunicacion])
  async dispositivosPorCosto(@Args('costo') costo: number): Promise<DispositivoDeComunicacion[]> {
    return this.service.findByCostLessThan(costo);
  }

  @Mutation(returns => DispositivoDeComunicacion)
  async createDispositivo(@Args('data') data: CreateDispositivoInput): Promise<DispositivoDeComunicacion> {
    return this.service.create(data);
  }
}
