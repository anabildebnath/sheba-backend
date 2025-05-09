import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private svc;
    constructor(svc: ServicesService);
    create(dto: CreateServiceDto): any;
    findAll(page?: string, limit?: string): Promise<{
        data: any;
        total: any;
    }>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: UpdateServiceDto): Promise<any>;
    remove(id: string): Promise<void>;
}
