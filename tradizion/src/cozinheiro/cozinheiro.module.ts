import { Module } from '@nestjs/common';
import { CozinheiroService } from './cozinheiro.service';
import { CozinheiroController } from './cozinheiro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cozinheiro } from './entities/cozinheiro.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Cozinheiro])],
  controllers: [CozinheiroController],
  providers: [CozinheiroService]
})
export class CozinheiroModule {}
