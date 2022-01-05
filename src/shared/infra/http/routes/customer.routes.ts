import { Router } from 'express';
import { FindCustomerController } from '@modules/purchase/useCases/customers/FindController';

const customerRoute = Router();

const findCustomerController = new FindCustomerController();

customerRoute.get('/', findCustomerController.handle);

export default customerRoute;