import { Injectable } from '@nestjs/common';
import { CreatePedidoPratoDto } from './dto/create-pedido-prato.dto';
import { UpdatePedidoPratoDto } from './dto/update-pedido-prato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoPrato } from './entities/pedido-prato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoPratoService {
  constructor(@InjectRepository(PedidoPrato) private pedidoRepository:Repository<PedidoPrato>){}
  create(createPedidoPratoDto: CreatePedidoPratoDto) {
    const newProduct = this.pedidoRepository.create({
      ...createPedidoPratoDto,
    })
    this.pedidoRepository.save(newProduct)
  }

  findAll() {
    return `This action returns all pedidoPrato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoPrato`;
  }

  update(id: number, updatePedidoPratoDto: UpdatePedidoPratoDto) {
    return `This action updates a #${id} pedidoPrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoPrato`;
  }
}
