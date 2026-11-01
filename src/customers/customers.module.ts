import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller.js';
import { Customer } from './entities/customer.entity.js';
import { getDatabaseConfig } from '../database/database.config.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: databaseConfig ? [TypeOrmModule.forFeature([Customer])] : [],
  exports: databaseConfig ? [TypeOrmModule] : [],
  controllers: [CustomersController]
})
export class CustomersModule {}
