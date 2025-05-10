// File: src/admin/admin.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ServicesModule } from '../services/services.module';
import { BookingsModule } from '../bookings/bookings.module';

import { AdminServicesController } from './services.controller';
import { AdminBookingsController } from './bookings.controller';

@Module({
  imports: [
    AuthModule,
    ServicesModule,
    BookingsModule,
  ],
  controllers: [AdminServicesController, AdminBookingsController],
})
export class AdminModule {}
