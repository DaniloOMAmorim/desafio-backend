import { getRepository, Repository } from "typeorm";

import { ICustomersRepository } from "@modules/purchase/repositories/ICustomersRepository";
import { ICreateCustomerDTO, IFindCustomerDTO } from "@modules/purchase/dtos/ICustomerDTO";
import Orders from "../entities/Order";
import Customers from "../entities/Customer";

export class CustomersRepository implements ICustomersRepository {
  private repository: Repository<Customers>;
  private repository_orders: Repository<Orders>

  constructor() {
    this.repository = getRepository(Customers);
    this.repository_orders = getRepository(Orders);
  }
  async create(data: ICreateCustomerDTO): Promise<Customers> {
    const customer = this.repository.create(data);
    const new_customers = await this.repository.save(customer);
    return new_customers;
  }
  async find(): Promise<IFindCustomerDTO[]> {
    const orders_query = this.repository_orders.createQueryBuilder("orders")
      .innerJoin("orders.customer", "customer")
      .select("SUM(orders.amount)", "total_spend_amount")
      .addSelect("SUM(orders.amount)/COUNT(orders.id)", "average_ticket_amount")
      .addSelect("customer.email", "email")
      .groupBy("customer.email");
    const orders = await orders_query.getRawMany();
    return orders;
  }
  
}
