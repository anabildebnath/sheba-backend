import { IsString, IsUUID, IsOptional, IsDateString } from 'class-validator';

export class CreateBookingDto {
@IsString() customerName: string;
@IsString() customerPhone: string;
@IsUUID() serviceId: string;
@IsDateString() @IsOptional() scheduleAt?: string;
}
