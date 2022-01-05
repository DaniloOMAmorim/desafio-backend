import { inject, injectable } from "tsyringe";

import { ICustomersRepository } from "@modules/purchase/repositories/ICustomersRepository";
import { FindCustomer } from "./FindController";

@injectable()
export class FindCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) { }

  async execute(): Promise<FindCustomer[]> {
    const customers = await this.customersRepository.find()
    return customers;
  }
}
