import { Injectable } from '@nestjs/common';
import { CreatePedidoPratoDto } from './dto/create-pedido-prato.dto';
import { UpdatePedidoPratoDto } from './dto/update-pedido-prato.dto';

@Injectable()
export class PedidoPratoService {
  create(createPedidoPratoDto: CreatePedidoPratoDto) {
    return 'This action adds a new pedidoPrato';
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
