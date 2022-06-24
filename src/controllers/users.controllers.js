import { getAllUsers, findUserById, createUser, editUser } from '../services/users.services';
import { validateRequest } from '../helpers/validation.helpers';

const getAll = async (req, res) => {
    const result = await getAllUsers();
    res.json(result);
}

const getUserById = async (req, res) => {
    const result = await findUserById(req.params.id);
    res.json(result);
}

const addUser = async (req, res) => {
    const errors = validateRequest(req);
    if (errors.length) {
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

const updateUser = async (req, res) => {
    const errors = validateRequest(req);
    if (errors.length) {
        return res.status(400).json({ errors });
    }

    try {
        await editUser(req.params.id, {
            name: req.body.name,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        })

        res.status(200).json({ id: req.params.id });
    }
    catch (error) {
        return res.status(500).send({ error });
    }
}

export { getAll, getUserById, addUser, updateUser };