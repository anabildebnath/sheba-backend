import { Service } from '../../services/entities/service.entity';
export declare class Booking {
    id: string;
    customerName: string;
    customerPhone: string;
    scheduleAt?: Date | null;
    status: string;
    service: Service;
    serviceId: number;
    createdAt: Date;
}
