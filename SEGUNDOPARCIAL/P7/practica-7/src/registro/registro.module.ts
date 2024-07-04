import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from './registro.entity';
import { RegistroService } from './registro.service';
import { RegistroResolver } from './registro.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Registro])],
  providers: [RegistroService, RegistroResolver],
})
export class RegistroModule {}
