// File: src/admin/services.controller.ts
import { Controller, UseGuards, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ServicesService } from '../services/services.service';
import { CreateServiceDto } from '../services/dto/create-service.dto';
import { UpdateServiceDto } from '../services/dto/update-service.dto';

@Controller('api/admin/services')
@UseGuards(JwtAuthGuard)
export class AdminServicesController {
constructor(private readonly servicesService: ServicesService) {}

@Post()
add(@Body() dto: CreateServiceDto) {
return this.servicesService.create(dto);
}

@Put(':id')
edit(@Param('id') id: string, @Body() dto: UpdateServiceDto) {
return this.servicesService.update(+id, dto);
}

@Delete(':id')
remove(@Param('id') id: string) {
return this.servicesService.remove(+id);
}

@Get()
listAll() {
return this.servicesService.findAll(1, 1000);
}
}
