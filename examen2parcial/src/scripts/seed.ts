import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DispositivoDeComunicacionService } from '../Dispositivo_Comu/dispositivo_comu.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dispositivoService = app.get(DispositivoDeComunicacionService);

  await dispositivoService.create({
    codigo: 'DC123',
    detalle: 'Dispositivo de comunicación A',
    clasificacion: 'Tipo A',
    caracteristicas: { color: 'negro', peso: '200g' },
    costo: 150.0,
    empresa: 'Empresa XYZ',
    activo: true,
  });

  await dispositivoService.create({
    codigo: 'DC124',
    detalle: 'Dispositivo de comunicación B',
    clasificacion: 'Tipo B',
    caracteristicas: { color: 'blanco', peso: '250g' },
    costo: 90.0,
    empresa: 'Empresa ABC',
    activo: true,
  });

  await app.close();
}

bootstrap();