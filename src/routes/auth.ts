import { NextFunction, Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import passport from 'passport';
import jwt from 'jsonwebtoken';
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

router.get(
  '/user/',
  passport.authenticate('isAuth', { session: false }),
  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ err: 'No autenticatido' });
    }

    res.json({
      id: (req.user as any).id,
      name: (req.user as any).name,
      email: (req.user as any).email,
      lastName: (req.user as any).lastName,
      isAdmin: (req.user as any).isAdmin,
      displayName: (req.user as any).displayName,
      createdAt: (req.user as any).createdAt,
      photoURL: (req.user as any).photoURL,
      wishlist: (req.user as any).wishlist,
      cedula: (req.user as any).cedula,
      phone: (req.user as any).phone,
      direction: (req.user as any).direction || '',
      existingUser: (req.user as any).donation,
    });
  }
);

router.post(
  '/login',
  [
    body('email').trim().not().isEmpty().withMessage('Debe su email valido'),
    body('password').trim().not().isEmpty().withMessage('Debe agregar una contrasena'),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('login', async (err, user) => {
      try {
        if (err) {
          return next(err);
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json(errors.array());
        }

        if (!user) {
          return res.status(400).json({ err: 'Datos invalidos' });
        }

        req.login(user, () => {
          const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY as any);

          return res.json({
            token,
            id: user?.id,
            name: user?.name,
            email: user?.email,
            lastName: user?.lastName,
            isAdmin: user?.isAdmin,
            displayName: user?.displayName,
            createdAt: user?.createdAt,
            photoURL: user?.photoURL,
            wishlist: user?.wishlist,
            cedula: user.cedula,
            phone: user.phone,
            direction: user.direction,
            donation: user.donation,
          });
        });
      } catch (err) {
        return next(err);
      }
    })(req, res, next);
  }
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
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('register', async (err, user) => {
      try {
        if (err) {
          return next(err);
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json(errors.array());
        }

        if (!user) {
          return res.status(400).json({ err: 'Datos invalidos' });
        }

        req.login(user, () => {
          const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY as any);
          return res.json({
            token,
            id: user?.id,
            name: user?.name,
            email: user?.email,
            lastName: user?.lastName,
            isAdmin: user?.isAdmin,
            displayName: user?.displayName,
            createdAt: user?.createdAt,
            photoURL: user?.photoURL,
            wishlist: user?.wishlist,
            cedula: user.cedula,
            phone: user.phone,
            direction: user.direction,
            donation: user.donation,
          });
        });
      } catch (err) {
        return next(err);
      }
    })(req, res, next);
  }
);

router.put(
  '/user/:userId',
  passport.authenticate('isAuth', { session: false }),
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
  passport.authenticate('isAuth', { session: false }),
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

router.put(
  '/user/add-favorite/:userId/:petId/:exists',
  passport.authenticate('isAuth', { session: false }),
  addFavorite
);
router.get(
  '/user/get-favorite/:userId',
  passport.authenticate('isAuth', { session: false }),
  getFavorite
);

router.delete(
  '/user/:userId',
  passport.authenticate('isAuth', { session: false }),
  deleteUser
);

// router.post('/user/upload/:userId', isAuth, upload.single('image'), uploadUserPFP);

export { router };
