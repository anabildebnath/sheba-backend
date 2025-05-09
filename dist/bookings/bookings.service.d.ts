import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private repo;
    constructor(repo: Repository);
    create(dto: CreateBookingDto): Promise<any>;
    findOne(id: string): Promise<any>;
    findAll(): any;
}
