import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ICreateOrderDTO } from "@modules/purchase/dtos/IOrderDTO";
import { IOrderRepository } from "@modules/purchase/repositories/IOrderRepository";
import { ICustomersRepository } from "@modules/purchase/repositories/ICustomersRepository";
import { ICreateCustomerDTO } from "@modules/purchase/dtos/ICustomerDTO";

@injectable()
export class CreateOrderUseCase {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository,

    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) { }

  async execute(data: ICreateOrderDTO, customer: ICreateCustomerDTO): Promise<void> {
    const { id } = await this.customersRepository.create(customer);

    if (!id)
      throw new AppError("Problem to create the customer!", 400);

    data.customer_id = id;
    await this.orderRepository.create(data);
  }
}
