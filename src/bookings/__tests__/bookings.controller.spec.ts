import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from '../bookings.controller';
import { BookingsService } from '../bookings.service';

describe('BookingsController', () => {
  let controller: BookingsController;
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers: [
        {
          provide: BookingsService,
          useValue: {
            create: jest.fn().mockResolvedValue({ id: 'uuid' }),
            findOne: jest.fn().mockResolvedValue({ id: 'uuid' }),
          },
        },
      ],
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
    service = module.get<BookingsService>(BookingsService);
  });

  it('should create booking', async () => {
    const dto = { customerName: 'John', customerPhone: '123', serviceId: '1' };
    expect(await controller.create(dto as any)).toEqual({ id: 'uuid' });
  });

  it('should return booking by id', async () => {
    expect(await controller.getStatus('uuid')).toEqual({ id: 'uuid' });
  });
});
