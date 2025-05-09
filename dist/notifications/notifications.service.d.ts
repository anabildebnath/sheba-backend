export declare class NotificationsService {
    private readonly transporter;
    private readonly twilioClient;
    constructor();
    sendBookingNotification(bookingId: string, customerEmail: string, customerPhone: string): Promise<void>;
}
