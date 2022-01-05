import { ICreateOrderDTO, IFindOrderDTO } from "../dtos/IOrderDTO";
import Orders from "../infra/typeorm/entities/Order";

export interface IOrderRepository {
  create(data: ICreateOrderDTO): Promise<Orders>;
  find(data: IFindOrderDTO): Promise<Orders[]>;
}
