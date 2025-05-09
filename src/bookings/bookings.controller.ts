//Files: src/bookings/bookings.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('api/bookings')
export class BookingsController {
constructor(private readonly bookingsService: BookingsService) {}

@Post()
create(@Body() dto: CreateBookingDto) {
return this.bookingsService.create(dto);
}

@Get(':id')
getStatus(@Param('id') id: string) {
return this.bookingsService.findOne(id);
}
}
