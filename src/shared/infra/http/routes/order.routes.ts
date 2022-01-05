import { Router } from 'express';
import { CreateAddressController } from '@modules/purchase/useCases/order/CreateController';
import { FindOrderController } from '@modules/purchase/useCases/order/FindController';

const orderRoute = Router();

const createAddressController = new CreateAddressController();
const findOrderController = new FindOrderController();

orderRoute.get('/', findOrderController.handle);
orderRoute.post('/', createAddressController.handle);

export default orderRoute;