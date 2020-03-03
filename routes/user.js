import { Router } from 'express';
import { createUser, getAllUsers, getUserById, getUserByLastName, deleteUser, updateUser } from '../controllers/user.controller';

const router = Router();

//Create new user POST /api/v1/user
router.post('/', createUser);

//Get all users GET /api/v1/user
router.get('/', getAllUsers);

//Get user by ID /api/v1/user/id
router.get('/:id', getUserById );

//Get user by name /api/v1/user/lastName
router.get('/byLastName/:last_name', getUserByLastName);

//Delete user by id DELETE /api/v1/user
router.delete('/:id', deleteUser);

//Update user by id PUT /api/v1/user
router.put('/:id', updateUser);


export default router;

