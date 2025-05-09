import { ServicesService } from '../services/services.service';
import { CreateServiceDto } from '../services/dto/create-service.dto';
import { UpdateServiceDto } from '../services/dto/update-service.dto';
export declare class AdminServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    add(dto: CreateServiceDto): any;
    edit(id: string, dto: UpdateServiceDto): Promise<any>;
    remove(id: string): Promise<void>;
    listAll(): Promise<{
        data: any;
        total: any;
    }>;
}
