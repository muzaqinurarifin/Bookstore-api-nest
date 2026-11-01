import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { getDatabaseConfig } from './database/database.config.js';
import { CustomersModule } from './customers/customers.module.js';
import { CustomerAddressesModule } from './customer_addresses/customer_addresses.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { PublishersModule } from './publishers/publishers.module.js';
import { BooksModule } from './books/books.module.js';
import { AuthorsModule } from './authors/authors.module.js';
import { BookAuthorsModule } from './book_authors/book_authors.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { OrderItemsModule } from './order_items/order_items.module.js';
import { PaymentsModule } from './payments/payments.module.js';
import { ShipmentsModule } from './shipments/shipments.module.js';

const databaseConfig = getDatabaseConfig();

@Module({
  imports: [
    ...(databaseConfig
      ? [
          TypeOrmModule.forRoot({
            ...databaseConfig,
            autoLoadEntities: true,
            synchronize: process.env.DB_SYNCHRONIZE === 'true',
          }),
        ]
      : []),
    CustomersModule,
    CustomerAddressesModule,
    CategoriesModule,
    PublishersModule,
    BooksModule,
    AuthorsModule,
    BookAuthorsModule,
    OrdersModule,
    OrderItemsModule,
    PaymentsModule,
    ShipmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
