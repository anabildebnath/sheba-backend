import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private repo;
    constructor(repo: Repository<Service>);
    create(dto: CreateServiceDto): Promise<Service>;
    findAll(page?: number, limit?: number): Promise<{
        data: Service[];
        total: number;
    }>;
    findOne(id: number): Promise<Service>;
    update(id: number, dto: UpdateServiceDto): Promise<Service>;
    remove(id: number): Promise<void>;
}
