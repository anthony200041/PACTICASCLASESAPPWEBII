import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { IdiomaService } from './idioma.service';
import { Idioma } from './idioma.entity';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';

@Resolver(of => Idioma)
export class IdiomaResolver {
  constructor(private idiomaService: IdiomaService) {}

  @Query(returns => [Idioma])
  idiomas() {
    return this.idiomaService.findAll();
  }

  @Mutation(returns => Idioma)
  createIdioma(@Args('createIdiomaDto') createIdiomaDto: CreateIdiomaDto) {
    return this.idiomaService.create(createIdiomaDto);
  }
  updateIdioma(@Args('id') id: string, @Args('updateIdiomaDto') updateIdiomaDto: UpdateIdiomaDto) {
    return this.idiomaService.update(id, updateIdiomaDto);
  }
}
