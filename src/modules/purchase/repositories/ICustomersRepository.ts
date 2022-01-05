import { ICreateCustomerDTO } from "../dtos/ICustomerDTO";
import Customers from "../infra/typeorm/entities/Customer";
import { FindCustomer } from "../useCases/customers/FindController";

export interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<Customers>;
  find(): Promise<FindCustomer[]>;
}
