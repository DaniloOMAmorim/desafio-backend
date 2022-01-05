import { getRepository, Repository } from "typeorm";

import Orders from "../entities/Order";
import { IOrderRepository } from "@modules/purchase/repositories/IOrderRepository";
import { ICreateOrderDTO, IFindOrderDTO } from "@modules/purchase/dtos/IOrderDTO";

export class OrderRepository implements IOrderRepository {
  private repository: Repository<Orders>;

  constructor() {
    this.repository = getRepository(Orders);
  }
  
  async create({ amount, created_at, customer_id}: ICreateOrderDTO): Promise<Orders> {
    const customer = this.repository.create({
      amount,
      created_at,
      customer_id
    });
    const new_customers = await this.repository.save(customer);
    return new_customers;
  }
  
  async find({ start_date, end_date }: IFindOrderDTO): Promise<Orders[]> {
    const orders_query = this.repository.createQueryBuilder("orders")
    .andWhere('created_at >= :after', { after: start_date })
    .andWhere('created_at < :before', { before: end_date })

    const orders = await orders_query.getMany();
    return orders;
  }
}
