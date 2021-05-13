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
  addFavorite,
  getFavorite,
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
    body('phone').trim().not().isEmpty().withMessage('Debe agregar su telefone'),
    body('direction').trim().not().isEmpty().withMessage('Debe agregar su direccion'),
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

router.put('/user/add-favorite/:userId/:petId/:exists', isAuth, addFavorite);
router.get('/user/get-favorite/:userId', isAuth, getFavorite);

router.delete('/user/:userId', isAuth, deleteUser);

// router.post('/user/upload/:userId', isAuth, upload.single('image'), uploadUserPFP);

export { router };
