import * as Yup from 'yup';
import 'yup-phone';

export const loginValidationSchema = Yup.object({
  email: Yup.string().required('El email es requerido').email(),
  password: Yup.string().required('La contrasena es requerida'),
});

export const registerValidationSchema = Yup.object({
  email: Yup.string().required('El email es requerido').email(),
  displayName: Yup.string().required('El nombre es requerida'),
  password: Yup.string().required('La contrasena es requerida'),
});

export const contactFormValidationSchema = Yup.object({
  email: Yup.string().required('El email es requerido').email(),
  message: Yup.string().max(5000).required('El mensaje es requerido'),
  cellNumber: Yup.string().phone().required(),
});
