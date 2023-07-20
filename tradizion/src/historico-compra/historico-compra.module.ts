import { Module } from '@nestjs/common';
import { HistoricoCompraService } from './historico-compra.service';
import { HistoricoCompraController } from './historico-compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoricoCompra } from './entities/historico-compra.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HistoricoCompra])],
  controllers: [HistoricoCompraController],
  providers: [HistoricoCompraService]
})
export class HistoricoCompraModule {}
