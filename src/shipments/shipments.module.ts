import { Module } from '@nestjs/common';
import { ShipmentsController } from './shipments.controller.js';
import { ShipmentsService } from './shipments.service.js';
import { Shipment } from './entities/shipment.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment])],
  exports: [TypeOrmModule],
  controllers: [ShipmentsController],
  providers: [ShipmentsService]
})
export class ShipmentsModule {}
