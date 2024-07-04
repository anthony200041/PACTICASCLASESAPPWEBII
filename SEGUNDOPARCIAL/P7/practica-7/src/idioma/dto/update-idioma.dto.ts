import { IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateIdiomaDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  estado: string;
}
