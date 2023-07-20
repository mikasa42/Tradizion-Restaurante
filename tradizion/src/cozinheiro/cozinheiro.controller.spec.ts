import { Test, TestingModule } from '@nestjs/testing';
import { CozinheiroController } from './cozinheiro.controller';
import { CozinheiroService } from './cozinheiro.service';

describe('CozinheiroController', () => {
  let controller: CozinheiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CozinheiroController],
      providers: [CozinheiroService],
    }).compile();

    controller = module.get<CozinheiroController>(CozinheiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
