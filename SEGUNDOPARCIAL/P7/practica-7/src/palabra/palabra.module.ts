import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Palabra } from './palabra.entity';
import { PalabraService } from './palabra.service';
import { PalabraResolver } from './palabra.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Palabra])],
  providers: [PalabraService, PalabraResolver],
})
export class PalabraModule {}
