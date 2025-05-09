import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateServiceDto {
@IsString() name: string;
@IsString() category: string;
@IsNumber() price: number;
@IsString() @IsOptional() description?: string;
}
