import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Registro } from '../registro/registro.entity';

@ObjectType()
@Entity()
export class Idioma {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  descripcion: string;

  @Field()
  @Column()
  estado: string; // Nuevo atributo

  @OneToMany(type => Registro, registro => registro.idioma)
  registros: Registro[];
}
