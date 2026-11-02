import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller.js';
import { Customer } from './entities/customer.entity.js';
import { CustomersService } from './customers.service.js';
import { CustomerAddress } from './entities/customer-address.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, CustomerAddress])],
  exports: [TypeOrmModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
