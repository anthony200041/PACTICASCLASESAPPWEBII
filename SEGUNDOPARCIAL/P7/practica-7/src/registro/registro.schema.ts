import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Registro {
  @Field(type => ID)
  id: string;

  @Field()
  idiomaId: string;

  @Field()
  palabraId: string;

  @Field()
  deletreo: string;

  @Field()
  silabas: string;

  @Field()
  fonetica: string;
}
