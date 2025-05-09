import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { NotificationsService } from './notifications.service';

@Processor('notifications')
export class NotificationsProcessor {
constructor(private readonly notificationsService: NotificationsService) {}

@Process('sendConfirmation')
async handleSendConfirmation(job: Job<{ bookingId: string; customerPhone: string }>) {
await this.notificationsService.sendConfirmation(job.data.bookingId, job.data.customerPhone);
}
}
