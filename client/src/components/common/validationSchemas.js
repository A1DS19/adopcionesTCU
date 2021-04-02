"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsLetterValidationSchema = exports.noCurrentUserFormValidationSchema = exports.currentUserFormValidationSchema = exports.updatePasswordValidationSchema = exports.updatePersonalDataValidationSchema = exports.createPetValidationSchema = exports.updateUserValidationSchema = exports.createUserValidationSchema = exports.registerValidationSchema = exports.loginValidationSchema = void 0;
const Yup = __importStar(require("yup"));
require("yup-phone");
exports.loginValidationSchema = Yup.object({
    email: Yup.string().required('El email es requerido').email(),
    password: Yup.string().required('La contrasena es requerida'),
});
exports.registerValidationSchema = Yup.object({
    email: Yup.string().required('El email es requerido').email(),
    displayName: Yup.string().required('El nombre de usuario es requerida'),
    password: Yup.string()
        .required('La contrasena es requerida')
        .min(6, 'La contrasena debe tener minimo 6 digitos'),
});
exports.createUserValidationSchema = Yup.object({
    email: Yup.string().required('El email es requerido').email(),
    displayName: Yup.string().required('El nombre de usuario es requerida'),
    password: Yup.string()
        .required('La contrasena es requerida')
        .min(6, 'La contrasena debe tener minimo 6 digitos'),
    name: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    isAdmin: Yup.string().required('Determinar si el usuario es administrador es requerido'),
});
exports.updateUserValidationSchema = Yup.object({
    email: Yup.string().required('El email es requerido').email(),
    displayName: Yup.string().required('El nombre de usuario es requerida'),
    name: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    isAdmin: Yup.string().required('Determinar si el usuario es administrador es requerido'),
});
exports.createPetValidationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    location: Yup.string().required('La ubicacion es requerida'),
    breed: Yup.string().required('La raza es requerida'),
    adopted: Yup.string().required('Debe escojer si la mascota esta adoptada o no'),
    description: Yup.string().required('La descripccion es requerida'),
});
exports.updatePersonalDataValidationSchema = Yup.object({
    displayName: Yup.string().required('El nombre de usuario es requerida'),
    name: Yup.string().required('El apellido es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
});
exports.updatePasswordValidationSchema = Yup.object({
    oldPassword: Yup.string().required('Debe agregar su antigua contrasena para cambiarla'),
    newPassword: Yup.string()
        .required('La contrasena es requerida')
        .min(6, 'La contrasena debe tener minimo 6 digitos'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Las contrasenas deben ser iguales')
        .required(),
});
exports.currentUserFormValidationSchema = Yup.object({
    email: Yup.string().required('El email es requerido').email(),
    message: Yup.string().max(5000).required('El mensaje es requerido'),
    userName: Yup.string().required('Debe agregar su nombre'),
    petId: Yup.string(),
});
exports.noCurrentUserFormValidationSchema = Yup.object({
    email: Yup.string().required('El email es requerido').email(),
    message: Yup.string().max(5000).required('El mensaje es requerido'),
    userName: Yup.string().required('Debe agregar su nombre'),
    petId: Yup.string(),
});
exports.newsLetterValidationSchema = Yup.object({
    email: Yup.string().required('Debe agregar un email').email(),
});
//# sourceMappingURL=validationSchemas.js.map