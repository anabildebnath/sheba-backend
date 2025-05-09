import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
constructor(@InjectRepository(Booking) private repo: Repository) {}

async create(dto: CreateBookingDto) {
const booking = this.repo.create({
customerName: dto.customerName,
customerPhone: dto.customerPhone,
serviceId: +dto.serviceId,
scheduleAt: dto.scheduleAt ? new Date(dto.scheduleAt) : null,
});
return this.repo.save(booking);
}

async findOne(id: string) {
const booking = await this.repo.findOne(id);
if (!booking) throw new NotFoundException('Booking not found');
return booking;
}

findAll() {
return this.repo.find({ relations: ['service'] });
}
}
