import { Router } from 'express';
import { getAll, getUserById, addUser, updateUser } from '../controllers/users.controllers';
import { createUserValidator, editUserValidator } from '../validators/users.validators';
var router = Router();

/* GET users listing. */
router.get('/users', getAll);
router.get('/users/:id', getUserById);
router.post('/users', createUserValidator(), addUser);
router.put('/users/:id', editUserValidator(), updateUser);

export default router;
