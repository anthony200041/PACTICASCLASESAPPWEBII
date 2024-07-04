import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsocketModule } from './websocket/websocket.module';
import { Transaction } from './transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Transaction],
      synchronize: true,
    }),
    WebsocketModule,
  ],
})
export class AppModule {}
