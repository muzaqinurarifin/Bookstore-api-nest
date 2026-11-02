import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity.js';
import { PublishersController } from './publishers.controller.js';
import { PublishersService } from './publishers.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  exports: [TypeOrmModule],
  controllers: [PublishersController],
  providers: [PublishersService],
})
export class PublishersModule {}
