import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Palabra } from './palabra.entity';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';

@Injectable()
export class PalabraService {
  constructor(
    @InjectRepository(Palabra)
    private palabraRepository: Repository<Palabra>,
  ) {}

  findAll(): Promise<Palabra[]> {
    return this.palabraRepository.find();
  }

  create(createPalabraDto: CreatePalabraDto): Promise<Palabra> {
    const palabra = this.palabraRepository.create(createPalabraDto);
    return this.palabraRepository.save(palabra);
  }

  update(id: string, updatePalabraDto: UpdatePalabraDto): Promise<Palabra> {
    return this.palabraRepository.save({ id, ...updatePalabraDto });
  }
}


