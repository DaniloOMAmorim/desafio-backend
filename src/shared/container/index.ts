import { container } from "tsyringe";

import { CustomersRepository } from "@modules/purchase/infra/typeorm/repositories/CustomerRepository";
import { ICustomersRepository } from "@modules/purchase/repositories/ICustomersRepository";

import { OrderRepository } from "@modules/purchase/infra/typeorm/repositories/OrderRepository";
import { IOrderRepository } from "@modules/purchase/repositories/IOrderRepository";

container.registerSingleton<ICustomersRepository>(
  "CustomersRepository",
  CustomersRepository
);

container.registerSingleton<IOrderRepository>(
  "OrderRepository",
  OrderRepository
);