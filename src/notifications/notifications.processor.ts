// File: src/notifications/notifications.processor.ts
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { NotificationsService } from './notifications.service';

@Processor('notifications')
export class NotificationsProcessor {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Process('sendConfirmation')
  async handleSendConfirmation(job: Job<{ bookingId: string; customerPhone: string; customerEmail: string }>) {
    await this.notificationsService.sendBookingNotification(
      job.data.bookingId, 
      job.data.customerEmail, // Added customerEmail
      job.data.customerPhone
    );
  }
}
