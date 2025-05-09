import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from '../bookings.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Booking } from '../entities/booking.entity';
import { Repository } from 'typeorm';

describe('BookingsService', () => {
  let service: BookingsService;
  let repo: Repository<Booking>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingsService,
        {
          provide: getRepositoryToken(Booking),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
    repo = module.get<Repository<Booking>>(getRepositoryToken(Booking));
  });

  it('should create a booking', async () => {
    const dto = { customerName: 'John', customerPhone: '1234567890', serviceId: '1' };
    const savedBooking = { ...dto, id: 'uuid' } as any;
    jest.spyOn(repo, 'save').mockResolvedValue(savedBooking);

    expect(await service.create(dto as any)).toEqual(savedBooking);
  });

  it('should throw if booking not found', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValue(null);
    await expect(service.findOne('invalid-id')).rejects.toThrow('Booking not found');
  });

  it('should return all bookings', async () => {
    const result = [{ id: 'uuid', customerName: 'John' }];
    jest.spyOn(repo, 'find').mockResolvedValue(result as any);
    expect(await service.findAll()).toEqual(result);
  });
});
