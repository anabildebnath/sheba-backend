import { Test, TestingModule } from '@nestjs/testing';
import { AdminServicesController } from '../services.controller';
import { ServicesService } from '../../services/services.service';

describe('AdminServicesController', () => {
  let controller: AdminServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminServicesController],
      providers: [
        {
          provide: ServicesService,
          useValue: {
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
            findAll: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<AdminServicesController>(AdminServicesController);
  });

  it('should list all services', async () => {
    expect(await controller.listAll()).toEqual([]);
  });
});
