import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosDaoService } from './produtos-dao.service';

describe('ProdutosDaoService', () => {
  let service: ProdutosDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosDaoService],
    }).compile();

    service = module.get<ProdutosDaoService>(ProdutosDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
