import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Author } from '../../authors/entities/author.entity.js';
import { Book } from '../../books/entities/book.entity.js';

@Entity('book_authors')
export class BookAuthor {
  @PrimaryColumn('uuid', { name: 'book_id' })
  bookId: string;

  @PrimaryColumn('uuid', { name: 'author_id' })
  authorId: string;

  @ManyToOne(() => Book, (book) => book.bookAuthors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'book_id' })
  book: Relation<Book>;

  @ManyToOne(() => Author, (author) => author.bookAuthors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'author_id' })
  author: Relation<Author>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
