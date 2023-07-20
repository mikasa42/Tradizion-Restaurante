import { Injectable } from '@nestjs/common';
import { CreateCozinheiroDto } from './dto/create-cozinheiro.dto';
import { UpdateCozinheiroDto } from './dto/update-cozinheiro.dto';

@Injectable()
export class CozinheiroService {
  create(createCozinheiroDto: CreateCozinheiroDto) {
    return 'This action adds a new cozinheiro';
  }

  findAll() {
    return `This action returns all cozinheiro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cozinheiro`;
  }

  update(id: number, updateCozinheiroDto: UpdateCozinheiroDto) {
    return `This action updates a #${id} cozinheiro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cozinheiro`;
  }
}
