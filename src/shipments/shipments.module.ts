import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entities/shipment.entity.js';
import { getDatabaseConfig } from '../database/database.config.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: databaseConfig ? [TypeOrmModule.forFeature([Shipment])] : [],
  exports: databaseConfig ? [TypeOrmModule] : [],
})
export class ShipmentsModule {}
