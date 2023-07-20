import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoPratoService } from './pedido-prato.service';
import { CreatePedidoPratoDto } from './dto/create-pedido-prato.dto';
import { UpdatePedidoPratoDto } from './dto/update-pedido-prato.dto';

@Controller('pedido-prato')
export class PedidoPratoController {
  constructor(private readonly pedidoPratoService: PedidoPratoService) {}

  @Post()
  create(@Body() createPedidoPratoDto: CreatePedidoPratoDto) {
    return this.pedidoPratoService.create(createPedidoPratoDto);
  }

  @Get()
  findAll() {
    return this.pedidoPratoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoPratoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoPratoDto: UpdatePedidoPratoDto) {
    return this.pedidoPratoService.update(+id, updatePedidoPratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoPratoService.remove(+id);
  }
}
