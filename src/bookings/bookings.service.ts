// File: src/bookings/bookings.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity'; // Correct entity import
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(@InjectRepository(Booking) private repo: Repository<Booking>) {}

  async create(dto: CreateBookingDto) {
    const booking = this.repo.create({
      customerName: dto.customerName,
      customerPhone: dto.customerPhone,
      serviceId: +dto.serviceId,
      scheduleAt: dto.scheduleAt ? new Date(dto.scheduleAt) : null, // Ensure null works correctly
    });
    return this.repo.save(booking);
  }

// Only showing the method that needs change

  async findOne(id: string) {
    const booking = await this.repo.findOne({ where: { id } });
    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }


  findAll() {
    return this.repo.find({ relations: ['service'] });
  }
}
