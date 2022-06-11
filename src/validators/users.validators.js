import { check } from "express-validator";
import { findUserByEmail } from "../services/users.services";


const createUserValidator = () => {
    return [
        check('name').notEmpty().withMessage('The name must be required'),
        check('email').normalizeEmail().trim().isEmail().custom(checkDuplicateEmail),
        check('password').isLength({ min: 6 }),
        check('phoneNumber').notEmpty().isMobilePhone()
    ];
};

const checkDuplicateEmail = async (value) => {
    const user = await findUserByEmail(value);
    if (user != null) {
        throw Error('email already in use');
    }
    return true;
}

export {
    createUserValidator
}