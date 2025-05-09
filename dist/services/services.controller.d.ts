import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private svc;
    constructor(svc: ServicesService);
    create(dto: CreateServiceDto): Promise<import("./entities/service.entity").Service>;
    findAll(page?: string, limit?: string): Promise<{
        data: import("./entities/service.entity").Service[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/service.entity").Service>;
    update(id: string, dto: UpdateServiceDto): Promise<import("./entities/service.entity").Service>;
    remove(id: string): Promise<void>;
}
