import { Module } from '@nestjs/common';
import { PedidoPratoService } from './pedido-prato.service';
import { PedidoPratoController } from './pedido-prato.controller';

@Module({
  controllers: [PedidoPratoController],
  providers: [PedidoPratoService]
})
export class PedidoPratoModule {}
