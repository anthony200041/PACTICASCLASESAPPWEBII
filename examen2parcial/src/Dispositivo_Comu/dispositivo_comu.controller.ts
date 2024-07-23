import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DispositivoDeComunicacionService } from './dispositivo_comu.service';
import { DispositivoDeComunicacion } from './dispositivo_comu.entity';

@Controller('dispositivo-comunicacion')
export class DispositivoDeComunicacionController {
  constructor(private readonly service: DispositivoDeComunicacionService) {}

  @Post()
  async create(@Body() data: Partial<DispositivoDeComunicacion>): Promise<DispositivoDeComunicacion> {
    return this.service.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<DispositivoDeComunicacion>): Promise<void> {
    return this.service.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }

  @Put('soft-delete/:id')
  async softDelete(@Param('id') id: number): Promise<void> {
    return this.service.softDelete(id);
  }

  @Get()
  async findAll(): Promise<DispositivoDeComunicacion[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<DispositivoDeComunicacion> {
    return this.service.findOne(id);
  }
}
