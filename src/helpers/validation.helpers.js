import { validationResult } from "express-validator";

const validateRequest = (request) => {
    const errors = validationResult(request);
    return errors.array();
}

export {
    validateRequest
}