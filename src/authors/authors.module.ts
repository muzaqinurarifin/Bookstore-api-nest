import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller.js';
import { AuthorsService } from './authors.service.js';
import { Author } from './entities/author.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  exports: [TypeOrmModule],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
