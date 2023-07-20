import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CozinheiroService } from './cozinheiro.service';
import { CreateCozinheiroDto } from './dto/create-cozinheiro.dto';
import { UpdateCozinheiroDto } from './dto/update-cozinheiro.dto';

@Controller('cozinheiro')
export class CozinheiroController {
  constructor(private readonly cozinheiroService: CozinheiroService) {}

  @Post()
  create(@Body() createCozinheiroDto: CreateCozinheiroDto) {
    return this.cozinheiroService.create(createCozinheiroDto);
  }

  @Get()
  findAll() {
    return this.cozinheiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cozinheiroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCozinheiroDto: UpdateCozinheiroDto) {
    return this.cozinheiroService.update(+id, updateCozinheiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cozinheiroService.remove(+id);
  }
}
