import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity.js';
import { getDatabaseConfig } from '../database/database.config.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: databaseConfig ? [TypeOrmModule.forFeature([Order])] : [],
  exports: databaseConfig ? [TypeOrmModule] : [],
})
export class OrdersModule {}
