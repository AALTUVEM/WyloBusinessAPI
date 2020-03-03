import { Router } from 'express';
import { createCompany, getAllCompanies, getCompanyById, getCompanyByName, deleteCompany, updateCompany } from '../controllers/company.controller';

const router = Router();

//Create new Company GET /api/v1/company
router.post('/', createCompany);

//Get all Companies GET /api/v1/company
router.get('/', getAllCompanies);


//Get Company by ID /api/v1/company/:id
router.get('/:id', getCompanyById );


//Get company by name /api/v1/company/companyName
router.get('/companyName/:name', getCompanyByName);


//Delete company by id DELETE /api/v1/company
router.delete('/:id', deleteCompany);

//Update company by id PUT /api/v1/company
router.put('/:id', updateCompany);

export default router;