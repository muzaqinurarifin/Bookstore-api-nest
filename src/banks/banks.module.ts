import { Module } from '@nestjs/common';
import { BanksController } from './banks.controller.js';
import { BanksService } from './banks.service.js';
import { Bank } from './entities/bank.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bank])],
  exports: [TypeOrmModule],
  controllers: [BanksController],
  providers: [BanksService]
})
export class BanksModule {}
