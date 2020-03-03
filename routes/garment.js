import { Router } from 'express';
import { CreateGarment, getAllGarmentsById,deleteGarmentById } from '../controllers/garment.controller';
const router = Router();

//Create new garment POST /api/v1/garment
router.post('/', CreateGarment );

//Get all Garments by order_id
router.get('/:order_id', getAllGarmentsById);

//Delete Garment by ID
router.delete('/:id',deleteGarmentById );

export default router;