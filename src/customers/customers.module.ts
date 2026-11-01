import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller.js';
import { Customer } from './entities/customer.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  exports: [TypeOrmModule],
  controllers: [CustomersController]
})
export class CustomersModule {}
