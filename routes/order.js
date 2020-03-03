import { Router } from 'express';
import { createOrder, getAllOrders, deleteOrder } from '../controllers/order.controller';

const router = Router();

//POST
router.post('/', createOrder);

//GET
router.get('/', getAllOrders);

//DELETE
router.delete('/:id', deleteOrder);

//Terminar Rutas de busqueda y PUT
export default router;