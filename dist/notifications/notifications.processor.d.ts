import { Job } from 'bull';
import { NotificationsService } from './notifications.service';
export declare class NotificationsProcessor {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    handleSendConfirmation(job: Job<{
        bookingId: string;
        customerPhone: string;
        customerEmail: string;
    }>): Promise<void>;
}
