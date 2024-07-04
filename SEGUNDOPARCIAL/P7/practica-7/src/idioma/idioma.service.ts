import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Idioma } from './idioma.entity';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';

@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private idiomaRepository: Repository<Idioma>,
  ) {}

  findAll(): Promise<Idioma[]> {
    return this.idiomaRepository.find();
  }

  create(createIdiomaDto: CreateIdiomaDto): Promise<Idioma> {
    const idioma = this.idiomaRepository.create(createIdiomaDto);
    return this.idiomaRepository.save(idioma);
  }

  update(id: string, updateIdiomaDto: UpdateIdiomaDto): Promise<Idioma> {
    return this.idiomaRepository.save({ id, ...updateIdiomaDto });
  }

}

