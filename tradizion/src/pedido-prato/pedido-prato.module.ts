import { Module } from '@nestjs/common';
import { PedidoPratoService } from './pedido-prato.service';
import { PedidoPratoController } from './pedido-prato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoPrato } from './entities/pedido-prato.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PedidoPrato])],
  controllers: [PedidoPratoController],
  providers: [PedidoPratoService]
})
export class PedidoPratoModule {}
