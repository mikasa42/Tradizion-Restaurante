import { Test, TestingModule } from '@nestjs/testing';
import { PedidoPratoController } from './pedido-prato.controller';
import { PedidoPratoService } from './pedido-prato.service';

describe('PedidoPratoController', () => {
  let controller: PedidoPratoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoPratoController],
      providers: [PedidoPratoService],
    }).compile();

    controller = module.get<PedidoPratoController>(PedidoPratoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
