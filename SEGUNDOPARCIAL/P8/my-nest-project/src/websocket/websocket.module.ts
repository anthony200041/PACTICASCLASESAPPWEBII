import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsocketGateway } from './websocket.gateway';
import { WebsocketService } from './websocket.service';
import { Transaction } from '../transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  providers: [WebsocketGateway, WebsocketService],
})
export class WebsocketModule {}

