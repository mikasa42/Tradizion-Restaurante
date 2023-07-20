import { Test, TestingModule } from '@nestjs/testing';
import { CozinheiroService } from './cozinheiro.service';

describe('CozinheiroService', () => {
  let service: CozinheiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CozinheiroService],
    }).compile();

    service = module.get<CozinheiroService>(CozinheiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
