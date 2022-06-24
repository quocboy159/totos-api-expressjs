import { check } from "express-validator";
import { findUserByEmail } from "../services/users.services";

const createUserValidator = () => {
    return [
        check('name').notEmpty().withMessage('The name must be required'),
        check('email').normalizeEmail().trim().isEmail().custom(checkDuplicateEmail),
        check('password').isLength({ min: 6 }),
        check('confirmedPassword').isLength({ min: 6 }).custom(checkMatchingPassword),
        check('phoneNumber').notEmpty().isMobilePhone()
    ];
};

const editUserValidator = () => {
    return [
        check('name').notEmpty().withMessage('The name must be required'),
        check('password').isLength({ min: 6 }),
        check('confirmedPassword').isLength({ min: 6 }).custom(checkMatchingPassword),
        check('phoneNumber').notEmpty().isMobilePhone()
    ];
}

const checkDuplicateEmail = async (value) => {
    const user = await findUserByEmail(value);
    if (user != null) {
        throw new Error('Email already in use');
    }
    return true;
}

const checkMatchingPassword = async (value, { req }) => {
    if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
    }

    return true;
}

export {
    createUserValidator,
    editUserValidator
}