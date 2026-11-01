import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity.js';
import { getDatabaseConfig } from '../database/database.config.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: databaseConfig ? [TypeOrmModule.forFeature([Book])] : [],
  exports: databaseConfig ? [TypeOrmModule] : [],
})
export class BooksModule {}
