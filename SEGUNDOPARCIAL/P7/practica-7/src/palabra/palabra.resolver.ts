import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PalabraService } from './palabra.service';
import { Palabra } from './palabra.entity';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';

@Resolver(of => Palabra)
export class PalabraResolver {
  constructor(private palabraService: PalabraService) {}

  @Query(returns => [Palabra])
  palabras() {
    return this.palabraService.findAll();
  }

  @Mutation(returns => Palabra)
  createPalabra(@Args('createPalabraDto') createPalabraDto: CreatePalabraDto) {
    return this.palabraService.create(createPalabraDto);
  }
  updatePalabra(@Args('id') id: string, @Args('updatePalabraDto') updatePalabraDto: UpdatePalabraDto) {
    return this.palabraService.update(id, updatePalabraDto);
  }
}
