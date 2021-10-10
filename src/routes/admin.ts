import { Router } from 'express';
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
  getUserByCedula,
} from '../controllers/admin';
import { body } from 'express-validator';
import { isAdmin } from '../middleware/isAdmin';
import passport from 'passport';
const router = Router();

router.get('/users', getUsers);
router.post(
  '/users/get-user-cedula',
  [
    body('cedula')
      .trim()
      .toLowerCase()
      .not()
      .isEmpty()
      .withMessage('Debe agregar la cedula para buscar usuario'),
  ],
  getUserByCedula
);
router.get('/user/:userId', getUser);

router.post(
  '/user',
  [
    body('email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage('Debe agregar un email valido'),
    body('password')
      .trim()
      .isLength({ min: 6 })
      .withMessage('La contrasena debe tener al menos 6 caracteres'),
    body('name').trim().not().isEmpty().withMessage('El nombre es requerido'),
    body('lastName').trim().not().isEmpty().withMessage('El apellido es requerido'),
    body('isAdmin')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Determinar si el usuario es administrador o no es requerido'),
    body('displayName')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe agregar su nombre de usuario'),
  ],
  createUser
);
router.put(
  '/user/:userId',
  [
    body('email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage('Debe agregar un email valido'),
    body('name').trim().not().isEmpty().withMessage('El nombre es requerido'),
    body('lastName').trim().not().isEmpty().withMessage('El apellido es requerido'),
    body('isAdmin')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Determinar si el usuario es administrador o no es requerido'),
    body('displayName')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe agregar su nombre de usuario'),
  ],
  updateUser
);
router.delete('/user/:userId', deleteUser);

export { router };
