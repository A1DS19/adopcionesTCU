import { Router } from 'express';
import { isAdmin } from '../middleware/isAdmin';
import {
  createPet,
  updatePet,
  getPet,
  deletePet,
  getPets,
  uploadPetPictures,
  sendEmail,
} from '../controllers/pet';
import { body } from 'express-validator';
import { upload } from '../services/s3-upload';
const router = Router();

router.get('/pets', getPets);

router.get('/pet/:petId', getPet);

router.post(
  '/pet',
  isAdmin,
  [
    body('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe incluir el nombre de la mascota'),
    body('location')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe incluir la ubicacion de la mascota'),
    body('breed')
      .trim()
      .not()
      .isEmpty()
      .toLowerCase()
      .withMessage('Debe incluir la raza de la mascota'),
    body('adopted')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe decir si la mascota es adoptada o no'),
    body('description')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe incluir la descripccion de la mascota'),
  ],
  createPet
);

router.put(
  '/pet/:petId',
  isAdmin,
  [
    body('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe incluir el nombre de la mascota'),
    body('location')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe incluir la ubicacion de la mascota'),
    body('breed')
      .trim()
      .not()
      .isEmpty()
      .toLowerCase()
      .withMessage('Debe incluir la raza de la mascota'),
    body('adopted')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe decir si la mascota es adoptada o no'),
    body('description')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Debe incluir la descripccion de la mascota'),
  ],
  updatePet
);

router.delete('/pet/:petId', isAdmin, deletePet);

router.post(
  '/pet/upload/:petId',
  isAdmin,
  upload.array('images[]', 3),
  uploadPetPictures
);

router.post(
  '/send',
  [
    body('email')
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage('Debe incluir un email valido'),
    body('message')
      .not()
      .isEmpty()
      .isLength({ max: 5000 })
      .withMessage('Debe incluir un mensaje y que esta tenga maximo 5000 caracteres'),
    body('userName').not().isEmpty().withMessage('Debe incluir su nombre'),
    body('petId').not().isEmpty(),
  ],
  sendEmail
);

export { router };
