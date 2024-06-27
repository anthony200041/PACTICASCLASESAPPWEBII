import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Palabra {
  @Field(type => ID)
  id: string;

  @Field()
  palabra: string;

  @Field()
  deletreo: string;
}
