import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    create(dto: CreateBookingDto): Promise<import("./entities/booking.entity").Booking>;
    getStatus(id: string): Promise<import("./entities/booking.entity").Booking>;
}
