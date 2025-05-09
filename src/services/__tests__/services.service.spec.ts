import { Test, TestingModule } from '@nestjs/testing';
import { ServicesService } from '../services.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Service } from '../entities/service.entity';
import { Repository } from 'typeorm';

describe('ServicesService', () => {
  let service: ServicesService;
  let repo: Repository<Service>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicesService,
        {
          provide: getRepositoryToken(Service),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
    repo = module.get<Repository<Service>>(getRepositoryToken(Service));
  });

  it('should create a service', async () => {
    const dto = { name: 'Cleaning', category: 'Home', price: 100 };
    const saved = { ...dto, id: 1 } as any;
    jest.spyOn(repo, 'save').mockResolvedValue(saved);
    expect(await service.create(dto as any)).toEqual(saved);
  });

  it('should return paginated list', async () => {
    const result = [{ id: 1, name: 'Cleaning' }];
    jest.spyOn(repo, 'findAndCount').mockResolvedValue([result as any, 1]);
    const data = await service.findAll(1, 10);
    expect(data.items).toEqual(result);
    expect(data.total).toBe(1);
  });
});
