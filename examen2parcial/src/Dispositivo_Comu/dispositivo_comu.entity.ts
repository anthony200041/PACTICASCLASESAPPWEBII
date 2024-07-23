import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType, Float } from '@nestjs/graphql';
import { JSONScalar } from '../common/scalars/json.scalar';

@ObjectType()
@Entity()
export class DispositivoDeComunicacion {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  codigo: string;

  @Field()
  @Column()
  detalle: string;

  @Field()
  @Column()
  clasificacion: string;

  @Field(type => JSONScalar)
  @Column('jsonb')
  caracteristicas: Record<string, any>;

  @Field(type => Float)
  @Column('decimal')
  costo: number;

  @Field()
  @Column()
  empresa: string;

  @Field()
  @Column({ default: true })
  activo: boolean;
}
