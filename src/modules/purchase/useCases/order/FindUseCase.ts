import { inject, injectable } from "tsyringe";

import { IFindOrderDTO } from "@modules/purchase/dtos/IOrderDTO";
import { IOrderRepository } from "@modules/purchase/repositories/IOrderRepository";
import Orders from "@modules/purchase/infra/typeorm/entities/Order";

@injectable()
export class FindOrderUseCase {
  constructor(
    @inject("OrderRepository")
    private orderRepository: IOrderRepository
  ) { }

  async execute(data: IFindOrderDTO): Promise<Orders[]> {
    const orders = await this.orderRepository.find(data)
    return orders;
  }
}
