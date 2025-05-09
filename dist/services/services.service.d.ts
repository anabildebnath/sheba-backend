import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private repo;
    constructor(repo: Repository);
    create(dto: CreateServiceDto): any;
    findAll(page?: number, limit?: number): Promise<{
        data: any;
        total: any;
    }>;
    findOne(id: number): Promise<any>;
    update(id: number, dto: UpdateServiceDto): Promise<any>;
    remove(id: number): Promise<void>;
}
