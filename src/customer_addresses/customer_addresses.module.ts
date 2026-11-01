import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddressesController } from './customer_addresses.controller.js';
import { CustomerAddress } from './entities/customer-address.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerAddress])],
  exports: [TypeOrmModule],
  controllers: [CustomerAddressesController]
})
export class CustomerAddressesModule {}
