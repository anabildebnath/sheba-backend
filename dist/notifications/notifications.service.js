"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const twilio_1 = require("twilio");
let NotificationsService = class NotificationsService {
    transporter;
    twilioClient;
    constructor() {
        const smtpHost = process.env.SMTP_HOST ?? '';
        const smtpPort = parseInt(process.env.SMTP_PORT ?? '587', 10);
        const smtpUser = process.env.SMTP_USER ?? '';
        const smtpPass = process.env.SMTP_PASS ?? '';
        const twilioSid = process.env.TWILIO_SID ?? '';
        const twilioToken = process.env.TWILIO_TOKEN ?? '';
        this.transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });
        this.twilioClient = new twilio_1.Twilio(twilioSid, twilioToken);
    }
    async sendBookingNotification(bookingId, customerEmail, customerPhone) {
        await this.transporter.sendMail({
            to: customerEmail,
            subject: 'Booking Confirmed',
            text: `Your booking ${bookingId} is confirmed.`,
        });
        await this.twilioClient.messages.create({
            to: customerPhone,
            from: process.env.TWILIO_FROM ?? '',
            body: `Booking ${bookingId} confirmed.`,
        });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map