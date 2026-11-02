import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity.js';
import { OrderItem } from '../../orders/entities/order-item.entity.js';
import { Payment } from '../../payments/entities/payment.entity.js';
import { Shipment } from '../../shipments/entities/shipment.entity.js';

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'paid'
  | 'shipped'
  | 'completed'
  | 'cancelled';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @JoinColumn({ name: 'customer_id' })
  customer: Relation<Customer>;

  @Column({ name: 'order_number', type: 'varchar', length: 30, unique: true })
  orderNumber: string;

  @Column({ type: 'varchar', length: 50, default: 'pending' })
  status: OrderStatus;

  @Column({ name: 'total_amount', type: 'decimal', precision: 12, scale: 2 })
  totalAmount: string;

  @Column({ name: 'shipping_recipient_name', type: 'varchar', length: 150 })
  shippingRecipientName: string;

  @Column({ name: 'shipping_phone', type: 'varchar', length: 20 })
  shippingPhone: string;

  @Column({ name: 'shipping_address', type: 'text' })
  shippingAddress: string;

  @Column({ name: 'shipping_city', type: 'varchar', length: 100 })
  shippingCity: string;

  @Column({ name: 'shipping_postal_code', type: 'varchar', length: 10 })
  shippingPostalCode: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: Relation<OrderItem[]>;

  @OneToOne(() => Payment, (payment) => payment.order)
  payment: Relation<Payment>;

  @OneToOne(() => Shipment, (shipment) => shipment.order)
  shipment: Relation<Shipment>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date | null;
}
