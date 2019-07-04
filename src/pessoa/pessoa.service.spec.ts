import { Test, TestingModule } from '@nestjs/testing';
import { PessoaDAOService } from './pessoa-dao.service';

describe('PessoaService', () => {
  let service: PessoaDAOService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PessoaDAOService],
    }).compile();

    service = module.get<PessoaDAOService>(PessoaDAOService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
