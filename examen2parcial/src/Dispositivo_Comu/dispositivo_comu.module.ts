import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositivoDeComunicacion } from './dispositivo_comu.entity';
import { DispositivoDeComunicacionService } from './dispositivo_comu.service';
import { DispositivoDeComunicacionController } from './dispositivo_comu.controller';
import { DispositivoDeComunicacionResolver } from './dispositivo_comu.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([DispositivoDeComunicacion])],
  providers: [DispositivoDeComunicacionService, DispositivoDeComunicacionResolver],
})
export class DispositivoDeComunicacionModule {}
