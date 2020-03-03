import { Router } from 'express';
import { createCompanyGarment, getAllCompanyGarments, deleteCompanyGarment } from '../controllers/companyGarment.controller';
const router = Router();

//Create new company Garment POST /api/v1/companyGarment
router.post('/', createCompanyGarment);


//Get all garments by company id GET /api/v1/companyGarment/:id
router.get('/:company_id', getAllCompanyGarments);

// Delete Company Garment /api/v1/companyGarment
router.delete('/:id', deleteCompanyGarment );



export default router;