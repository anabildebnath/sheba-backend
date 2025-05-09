import { ServicesService } from '../services/services.service';
import { CreateServiceDto } from '../services/dto/create-service.dto';
import { UpdateServiceDto } from '../services/dto/update-service.dto';
export declare class AdminServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    add(dto: CreateServiceDto): Promise<import("../services/entities/service.entity").Service>;
    edit(id: string, dto: UpdateServiceDto): Promise<import("../services/entities/service.entity").Service>;
    remove(id: string): Promise<void>;
    listAll(): Promise<{
        data: import("../services/entities/service.entity").Service[];
        total: number;
    }>;
}
