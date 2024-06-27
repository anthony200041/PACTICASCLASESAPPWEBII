import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from './registro.entity';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(Registro)
    private registroRepository: Repository<Registro>,
  ) {}

  findAll(): Promise<Registro[]> {
    return this.registroRepository.find({ relations: ['idioma', 'palabra'] });
  }

  create(createRegistroDto: CreateRegistroDto): Promise<Registro> {
    const registro = this.registroRepository.create(createRegistroDto);
    return this.registroRepository.save(registro);
  }
  update(id: string, updateRegistroDto: UpdateRegistroDto): Promise<Registro> {
    return this.registroRepository.save({ id, ...updateRegistroDto });
  }
}

