import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { NotificationsProcessor } from './notifications.processor';
import { NotificationsService } from './notifications.service';

@Module({
imports: [BullModule.registerQueue({ name: 'notifications' })],
providers: [NotificationsProcessor, NotificationsService],
})
export class NotificationsModule {}
