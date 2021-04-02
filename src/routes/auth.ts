import { Router } from 'express';
import { body } from 'express-validator';
import { upload } from '../services/s3-upload';
import {
  createUser,
  loginUser,
  getCurrentUser,
  updateUserData,
  deleteUser,
  updateUserPassword,
  uploadUserPFP,
} from '../controllers/auth';
import { isAuth } from '../middleware/isAuth';
const router = Router();

router.get('/user/:userId', isAuth, getCurrentUser);

router.post(
  '/login',
  [
    body('email')
      .trim()
      .not()
      .isEmpty()
      .normalizeEmail()
      .withMessage('Debe su email valido'),
    body('password').trim().not().isEmpty().withMessage('Debe agregar una contrasena'),
  ],
  loginUser
);

router.post(
  '/register',
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
  isAuth,
  [
    body('displayName')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe agregar su nombre de usuario'),
    body('name').trim().not().isEmpty().withMessage('Debe agregar su nombre'),
    body('lastName').trim().not().isEmpty().withMessage('Debe agregar su apellido'),
  ],
  updateUserData
);

router.put(
  '/user-password/:userId',
  isAuth,
  [
    body('oldPassword')
      .trim()
      .isLength({ min: 6 })
      .withMessage('La contrasena debe tener al menos 6 caracteres'),
    body('newPassword')
      .trim()
      .isLength({ min: 6 })
      .withMessage('La contrasena debe tener al menos 6 caracteres'),
  ],
  updateUserPassword
);

router.delete('/user/:userId', isAuth, deleteUser);

router.post('/user/upload/:userId', isAuth, upload.single('image'), uploadUserPFP);
export { router };
