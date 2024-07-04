import { IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateRegistroDto {
  @Field({ nullable: true })
  @IsString()
  deletreo?: string;

  @Field({ nullable: true })
  @IsString()
  silabas?: string;

  @Field({ nullable: true })
  @IsString()
  fonetica?: string;

  @Field({ nullable: true })
  @IsString()
  estado?: string;
}

