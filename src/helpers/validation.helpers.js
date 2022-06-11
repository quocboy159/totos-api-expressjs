import { validationResult } from "express-validator";

const getRequestError = (request) => {
    const errors = validationResult(request);
    return errors.array();
}

export {
    getRequestError
}