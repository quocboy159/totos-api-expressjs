import { Router } from 'express';
import { getAll, getUserById, addUser } from '../controllers/users.controllers';
import { createUserValidator } from '../validators/users.validators';
var router = Router();

/* GET users listing. */
router.get('/users', getAll);
router.get('/users/:id', getUserById);
router.post('/users', createUserValidator(), addUser);

export default router;
