import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return "Producto creado";
  }

  @Get()
  findAll() {
    return "Muestra todos los productos";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return "Producto # "+id;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return "Actualizamos producto # "+id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Borramos producto # "+id;
  }
}
