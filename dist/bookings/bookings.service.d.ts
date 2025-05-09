import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private repo;
    constructor(repo: Repository<Booking>);
    create(dto: CreateBookingDto): Promise<Booking>;
    findOne(id: string): Promise<Booking>;
    findAll(): Promise<Booking[]>;
}
