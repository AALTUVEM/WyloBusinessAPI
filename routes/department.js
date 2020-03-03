import { Router } from 'express';
import { createDepartment, getAllDepartmentsByCompanyId, updateDepartment, deleteDepartment } from '../controllers/department.controller';
const router = Router();

//Create new Department POST /api/v1/department
router.post('/', createDepartment);

//Get all deparments by companyId GET /api/v1/department/:id
router.get('/:company_id', getAllDepartmentsByCompanyId);

//Update department Name PUT /api/v1/department/:id
router.put('/:id', updateDepartment);

//Delete Department DELETE /api/v1/department/:id
router.delete('/:id', deleteDepartment);

export default router;