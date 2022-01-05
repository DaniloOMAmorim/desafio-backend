import { IFindCustomerDTO } from "@modules/purchase/dtos/ICustomerDTO";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCustomerUseCase } from "./FindUseCase";

class RequestCustomer {
  customers: FindCustomer[];
}

export class FindCustomer implements IFindCustomerDTO {
  email: string;
  average_ticket_amount: number;
  total_spend_amount: number; 
}


export class FindCustomerController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const findCustomer = container.resolve(FindCustomerUseCase);

    const customer = await findCustomer.execute();

    const requestOrder = new RequestCustomer();
    requestOrder.customers = customer

    return response.status(200).json(requestOrder);
  }
}
