import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateRegistroDto {
  @Field(type => ID)
  @IsUUID()
  @IsNotEmpty()
  idiomaId: string;

  @Field(type => ID)
  @IsUUID()
  @IsNotEmpty()
  palabraId: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  deletreo: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  silabas: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  fonetica: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
