import { Module } from '@nestjs/common';
import { AdminServicesController } from './services.controller';
import { AdminBookingsController } from './bookings.controller';

@Module({
controllers: [AdminServicesController, AdminBookingsController],
})
export class AdminModule {}
