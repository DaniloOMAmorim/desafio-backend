import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("customers")
export default class Customers {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn({ type: "timestamp", default: () => "now()" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "now()", onUpdate: "now()" })
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
