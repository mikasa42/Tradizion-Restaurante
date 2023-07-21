import { Injectable } from '@nestjs/common';
import { CreateCozinheiroDto } from './dto/create-cozinheiro.dto';
import { UpdateCozinheiroDto } from './dto/update-cozinheiro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cozinheiro } from './entities/cozinheiro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CozinheiroService {
  constructor(@InjectRepository(Cozinheiro) private   cozinheiroRepository:Repository<Cozinheiro>){}
  create(createCozinheiroDto: CreateCozinheiroDto) {
    const newCozinheiro = this.cozinheiroRepository.create({

      ...createCozinheiroDto,
    })
    this.cozinheiroRepository.save(newCozinheiro)
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
