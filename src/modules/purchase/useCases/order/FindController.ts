import { Request, Response } from "express";
import { container } from "tsyringe";

import Orders from "@modules/purchase/infra/typeorm/entities/Order";

import { FindOrderUseCase } from "./FindUseCase";

class RequestOrder {
  orders: Orders[];
}

export class FindOrderController {
  async handle(request: Request, response: Response): Promise<Response> {

    const start_date = request.query.start_date as string;
    const end_date = request.query.end_date as string;

    const findOrder = container.resolve(FindOrderUseCase);

    const orders = await findOrder.execute({start_date, end_date});

    const requestOrder = new RequestOrder();
    requestOrder.orders = orders

    return response.status(200).json(requestOrder);
  }
}
