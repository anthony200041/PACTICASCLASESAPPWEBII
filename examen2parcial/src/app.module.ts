import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DispositivoDeComunicacionModule } from './Dispositivo_Comu/dispositivo_comu.module';
import { WebsocketModule } from './websocket/websocket.module';
import { JSONScalar } from './common/scalars/json.scalar';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pgadmin',
      database: 'xe',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    DispositivoDeComunicacionModule,
    WebsocketModule,
  ],
  providers: [JSONScalar],
})
export class AppModule {}

