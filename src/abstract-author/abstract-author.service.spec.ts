import { Test, TestingModule } from '@nestjs/testing';
import { AbstractAuthorService } from './abstract-author.service';

describe('AbstractAuthorService', () => {
  let service: AbstractAuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractAuthorService],
    }).compile();

    service = module.get<AbstractAuthorService>(AbstractAuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
