import { ICreateCustomerDTO } from "@modules/purchase/dtos/ICustomerDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOrderUseCase } from "./CreateUseCase";

interface IRequestOrder { 
  amount: number;
  created_at: Date;
  customer: ICreateCustomerDTO;
}

interface RequestOrder {
  orders: IRequestOrder[];
}

export class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const orders:RequestOrder  = request.body;

    const createOrder = container.resolve(CreateOrderUseCase);

    for (const order of orders.orders)
      await createOrder.execute(order, order.customer);

    return response.status(201).send();
  }
}
