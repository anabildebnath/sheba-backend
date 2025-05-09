// File: src/notifications/notifications.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { Twilio } from 'twilio';

@Injectable()
export class NotificationsService {
  private readonly transporter: Transporter;
  private readonly twilioClient: Twilio;

  constructor() {
    const smtpHost: string = process.env.SMTP_HOST ?? '';
    const smtpPort: number = parseInt(process.env.SMTP_PORT ?? '587', 10);
    const smtpUser: string = process.env.SMTP_USER ?? '';
    const smtpPass: string = process.env.SMTP_PASS ?? '';
    const twilioSid: string = process.env.TWILIO_SID ?? '';
    const twilioToken: string = process.env.TWILIO_TOKEN ?? '';

    this.transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    this.twilioClient = new Twilio(twilioSid, twilioToken);
  }

  async sendBookingNotification(
    bookingId: string,
    customerEmail: string,
    customerPhone: string,
  ): Promise<void> {
    // Send email
    await this.transporter.sendMail({
      to: customerEmail,
      subject: 'Booking Confirmed',
      text: `Your booking ${bookingId} is confirmed.`,
    });

    // Send SMS
    await this.twilioClient.messages.create({
      to: customerPhone,
      from: process.env.TWILIO_FROM ?? '',
      body: `Booking ${bookingId} confirmed.`,
    });
  }
}
