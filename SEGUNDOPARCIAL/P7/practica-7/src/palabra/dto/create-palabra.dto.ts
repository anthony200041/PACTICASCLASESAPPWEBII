import { IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePalabraDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  palabra: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  deletreo: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
