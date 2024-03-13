import { body } from 'express-validator';

export const loginOrEmailValidators = [
  body('loginOrEmail')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('login or email required'),
  body('password')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('password is required'),
];
