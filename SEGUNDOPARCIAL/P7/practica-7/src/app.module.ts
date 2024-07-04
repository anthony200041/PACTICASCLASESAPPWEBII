import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Idioma } from './idioma/idioma.entity';
import { Palabra } from './palabra/palabra.entity';
import { Registro } from './registro/registro.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hacer que el módulo de configuración sea global
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // O el tipo de base de datos que estés usando
        host: configService.get<string>('localhost'),
        port: configService.get<number>('5432'),
        username: "postgres",
        password: "pgadmin",
        database: "P6",
        entities: [Idioma, Palabra, Registro],
        synchronize: true, // No usar en producción, puede causar pérdida de datos
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
