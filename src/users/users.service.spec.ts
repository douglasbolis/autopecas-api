import { Test, TestingModule } from '@nestjs/testing';
import { UsersDAOService } from './users-dao.service';

describe('UsersService', () => {
  let service: UsersDAOService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersDAOService],
    }).compile();

    service = module.get<UsersDAOService>(UsersDAOService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
