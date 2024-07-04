import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './idioma.entity';
import { IdiomaService } from './idioma.service';
import { IdiomaResolver } from './idioma.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Idioma])],
  providers: [IdiomaService, IdiomaResolver],
})
export class IdiomaModule {}
