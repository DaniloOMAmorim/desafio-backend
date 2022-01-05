import { Router } from "express";

import orderRoute from "./order.routes";
import customerRoute from "./customer.routes";

const router = Router();

router.use("/orders", orderRoute);
router.use("/customers", customerRoute);

export default router;
