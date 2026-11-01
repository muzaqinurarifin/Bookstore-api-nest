import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [TypeOrmModule],
})
export class BooksModule {}
