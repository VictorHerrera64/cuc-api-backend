import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return "Aqui se crea un Nuevo cliente"
   
  }

  @Get()
  findAll() {
    return "Devuelve la info del cliente de todos los clientes";
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return "Devuelve la info del cliente # "+id;
  
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return "Actualizamos la info del cliente # "+id;
 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Eliminamos cliente # "+id
  }
}
