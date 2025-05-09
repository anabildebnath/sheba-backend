// File: src/services/services.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity'; // Correct entity import
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(@InjectRepository(Service) private repo: Repository<Service>) {}

  create(dto: CreateServiceDto) {
    return this.repo.save(this.repo.create(dto));
  }

  async findAll(page = 1, limit = 10) {
    const [data, total] = await this.repo.findAndCount({ skip: (page - 1) * limit, take: limit });
    return { data, total };
  }

  async findOne(id: number) {
    const svc = await this.repo.findOne({ where: { id } });
    if (!svc) throw new NotFoundException('Service not found');
    return svc;
  }
  

  async update(id: number, dto: UpdateServiceDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
  }
}
