import { Test, TestingModule } from '@nestjs/testing';
import { AdminBookingsController } from '../bookings.controller';
import { BookingsService } from '../../bookings/bookings.service';

describe('AdminBookingsController', () => {
  let controller: AdminBookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminBookingsController],
      providers: [
        {
          provide: BookingsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<AdminBookingsController>(AdminBookingsController);
  });

  it('should return all bookings', async () => {
    expect(await controller.listAll()).toEqual([]);
  });
});
