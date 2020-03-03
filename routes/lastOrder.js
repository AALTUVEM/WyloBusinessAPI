import { Router } from 'express';
import { CreateLastOrder, getLastOrder, getOrderByNumber, deleteLastOrder } from '../controllers/lastOrder.controller';
const router = Router();

//Create new Last Order POST /api/v1/lastOrder
router.post('/', CreateLastOrder);

//Get last Order GET /api/v1/lastOrder
router.get('/', getLastOrder);

//Get last Order by number GET /api/v1/lastOrder/byNumber
router.get('/byNumber/:order_number', getOrderByNumber);

//Delete order by number DELETE /api/v1/lastOrder/
router.delete('/:order_number', deleteLastOrder)

export default router;