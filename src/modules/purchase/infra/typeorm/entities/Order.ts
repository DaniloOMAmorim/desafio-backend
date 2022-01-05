import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import Customers from './Customer'

@Entity("orders")
export default class Orders {
  @PrimaryColumn()
  id?: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "now()", onUpdate: "now()" })
  updated_at: Date;

  @Column()
  customer_id: string;

  @OneToOne(type => Customers)
  @JoinColumn({ name: "customer_id" })
  customer: Customers;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
