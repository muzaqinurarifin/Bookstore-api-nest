import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddressesController } from './customer_addresses.controller.js';
import { CustomerAddress } from './entities/customer-address.entity.js';
import { getDatabaseConfig } from '../database/database.config.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: databaseConfig ? [TypeOrmModule.forFeature([CustomerAddress])] : [],
  exports: databaseConfig ? [TypeOrmModule] : [],
  controllers: [CustomerAddressesController]
})
export class CustomerAddressesModule {}
