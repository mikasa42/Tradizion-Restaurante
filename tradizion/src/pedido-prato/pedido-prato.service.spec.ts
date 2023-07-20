import { Test, TestingModule } from '@nestjs/testing';
import { PedidoPratoService } from './pedido-prato.service';

describe('PedidoPratoService', () => {
  let service: PedidoPratoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoPratoService],
    }).compile();

    service = module.get<PedidoPratoService>(PedidoPratoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
