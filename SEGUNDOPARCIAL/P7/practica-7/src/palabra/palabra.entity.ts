import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Registro } from '../registro/registro.entity';

@ObjectType()
@Entity()
export class Palabra {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  palabra: string;

  @Field()
  @Column()
  deletreo: string;

  @Field()
  @Column()
  estado: string; // Nuevo atributo

  @OneToMany(type => Registro, registro => registro.palabra)
  registros: Registro[];
}
