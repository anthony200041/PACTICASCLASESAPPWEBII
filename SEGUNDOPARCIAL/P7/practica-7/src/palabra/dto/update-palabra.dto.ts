import { IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePalabraDto {
  @Field({ nullable: true }) // Permite que los campos sean opcionales para actualizar
  @IsString()
  palabra?: string;

  @Field({ nullable: true })
  @IsString()
  deletreo?: string;

  @Field({ nullable: true })
  @IsString()
  estado?: string;
}
