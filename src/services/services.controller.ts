//File: src/services/services.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('api/services')
export class ServicesController {
constructor(private svc: ServicesService) {
}

  @Post()
  create(@Body() dto: CreateServiceDto) {
  return this.svc.create(dto);
  }

@Get()
findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
    return this.svc.findAll(+page, +limit);
}

@Get(':id')
  findOne(@Param('id') id: string) {
    return this.svc.findOne(+id);
  }

@Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto) {
    return this.svc.update(+id, dto);
  }

@Delete(':id')
  remove(@Param('id') id: string) {
    return this.svc.remove(+id);
  }
}
