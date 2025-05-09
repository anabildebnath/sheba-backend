import { BookingsService } from '../bookings/bookings.service';
export declare class AdminBookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    listAll(): Promise<import("../bookings/entities/booking.entity").Booking[]>;
}
