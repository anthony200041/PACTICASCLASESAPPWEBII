import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { DispositivoDeComunicacionService } from '../Dispositivo_Comu/dispositivo_comu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositivoDeComunicacion } from '../Dispositivo_Comu/dispositivo_comu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DispositivoDeComunicacion])],
  providers: [WebsocketGateway, DispositivoDeComunicacionService],
})
export class WebsocketModule {}
