import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Idioma } from '../idioma/idioma.entity';
import { Palabra } from '../palabra/palabra.entity';

@ObjectType()
@Entity()
export class Registro {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  deletreo: string;

  @Field()
  @Column()
  silabas: string;

  @Field()
  @Column()
  fonetica: string;

  @Field()
  @Column()
  estado: string; // Nuevo atributo

  @Field(type => Idioma)
  @ManyToOne(type => Idioma, idioma => idioma.registros)
  idioma: Idioma;

  @Field(type => Palabra)
  @ManyToOne(type => Palabra, palabra => palabra.registros)
  palabra: Palabra;
}
