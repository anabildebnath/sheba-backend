// File: src/services/services.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from './entities/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServicesService],
  controllers: [ServicesController],
  exports: [ServicesService],    // ← add this line
})
export class ServicesModule {}
