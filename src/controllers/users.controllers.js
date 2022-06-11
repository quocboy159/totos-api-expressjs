import { getAllUsers, findUserById, createUser } from '../services/users.services';
import { getRequestError } from '../helpers/validation.helpers'; 

const getAll = async (req, res) => {
    const result = await getAllUsers();
    res.json(result);
}

const getUserById = async (req, res) => {
    const result = await findUserById(req.params.id);
    res.json(result);
}

const addUser = async (req, res) => {
    const errors = getRequestError(req);
    if(errors.length){
        return res.status(400).json({ errors });
    }

    const result = await createUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
    });

    res.status(200).json(result);
}

export { getAll, getUserById, addUser };