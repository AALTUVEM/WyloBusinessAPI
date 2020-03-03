import { Router } from 'express';
import { createUserRole, getAllUsersRole, getUserRoleById, deleteUserRole, updateUserRole} from '../controllers/userRoles.controller';
const router = Router();

//Create new userRole PUT /api/v1/userRole
router.post('/', createUserRole);

//Get all userRoles GET /api/v1/userRole
router.get('/', getAllUsersRole);

//Get by Id userRoles GET /api/v1/userRole/:id
router.get('/:id', getUserRoleById);

//Delete by Id userRoles DELETE /api/v1/userRole/:id
router.delete('/:id', deleteUserRole);

//Update by Id UserRoles PUT /api/v1/userRole/:id
router.put('/:id', updateUserRole);

export default router;