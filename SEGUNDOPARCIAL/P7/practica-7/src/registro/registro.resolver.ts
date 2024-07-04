import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RegistroService } from './registro.service';
import { Registro } from './registro.entity';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Resolver(of => Registro)
export class RegistroResolver {
  constructor(private registroService: RegistroService) {}

  @Query(returns => [Registro])
  registros() {
    return this.registroService.findAll();
  }

  @Mutation(returns => Registro)
  createRegistro(@Args('createRegistroDto') createRegistroDto: CreateRegistroDto) {
    return this.registroService.create(createRegistroDto);
  }
  updateRegistro(@Args('id') id: string, @Args('updateRegistroDto') updateRegistroDto: UpdateRegistroDto) {
    return this.registroService.update(id, updateRegistroDto);
  }
}

