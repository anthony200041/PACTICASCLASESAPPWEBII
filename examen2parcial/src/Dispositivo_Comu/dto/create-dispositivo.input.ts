import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateDispositivoInput {
  @Field()
  codigo: string;

  @Field()
  detalle: string;

  @Field()
  clasificacion: string;

  @Field(type => String)
  caracteristicas: Record<string, any>;

  @Field(type => Float)
  costo: number;

  @Field()
  empresa: string;

  @Field()
  activo: boolean;
}
