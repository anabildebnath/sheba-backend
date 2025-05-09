import { Controller, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { BookingsService } from '../bookings/bookings.service';

@Controller('api/admin/bookings')
@UseGuards(JwtAuthGuard)
export class AdminBookingsController {
constructor(private readonly bookingsService: BookingsService) {}

@Get()
listAll() {
return this.bookingsService.findAll();
}
}
