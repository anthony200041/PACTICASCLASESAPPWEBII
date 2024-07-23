import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { DispositivoDeComunicacion } from './dispositivo_comu.entity';

@Injectable()
export class DispositivoDeComunicacionService {
  constructor(
    @InjectRepository(DispositivoDeComunicacion)
    private readonly repo: Repository<DispositivoDeComunicacion>,
  ) {}

  async create(data: Partial<DispositivoDeComunicacion>): Promise<DispositivoDeComunicacion> {
    return this.repo.save(data);
  }

  async update(id: number, data: Partial<DispositivoDeComunicacion>): Promise<void> {
    await this.repo.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }

  async softDelete(id: number): Promise<void> {
    await this.repo.update(id, { activo: false });
  }

  async findAll(): Promise<DispositivoDeComunicacion[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<DispositivoDeComunicacion> {
    return this.repo.findOne({ where: { id } });
  }

  async findByCodigo(codigo: string): Promise<DispositivoDeComunicacion> {
    return this.repo.findOne({ where: { codigo } });
  }
  
  async findByCostLessThan(cost: number): Promise<DispositivoDeComunicacion[]> {
    return this.repo.find({ where: { costo: LessThan(cost) } });
  }
}
