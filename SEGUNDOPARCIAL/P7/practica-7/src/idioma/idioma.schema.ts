import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Idioma {
  @Field(type => ID)
  id: string;

  @Field()
  descripcion: string;
}
