import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity.js';
import { getDatabaseConfig } from '../database/database.config.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: databaseConfig ? [TypeOrmModule.forFeature([Publisher])] : [],
  exports: databaseConfig ? [TypeOrmModule] : [],
})
export class PublishersModule {}
