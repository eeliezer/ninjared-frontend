import * as Yup from 'yup';
import { regEmail } from '../utils/regExp';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('CAMPO REQUERIDO'),
  cellphone: Yup.string().required('CAMPO REQUERIDO'),
  location: Yup.string().required('CAMPO REQUERIDO'),
  address: Yup.string().required('CAMPO REQUERIDO'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('CAMPO REQUERIDO'),
  email: Yup.string()
    .email('CORREO ELECTRÓNICO INVÁLIDO')
    .required('CAMPO REQUERIDO'),
  password: Yup.string()
    .min(6, 'LA CONTRASEÑA DEBE CONTENER AL MENOS 6 CARACTERES')
    .required('CAMPO REQUERIDO'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email('CORREO ELECTRÓNICO INVÁLIDO')
    .required('CAMPO REQUERIDO'),
  password: Yup.string().required('CAMPO REQUERIDO'),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email('CORREO ELECTRÓNICO INVÁLIDO')
    .required('CAMPO REQUERIDO'),
});

export const validateValidationSchema = Yup.object({
  code: Yup.string()
    .min(6, 'MÍNIMO DE CARACTERES: 6')
    .max(6, 'MÁXIMO DE CARACTERES: 6')
    .required('CAMPO REQUERIDO'),
});

export const issueValidationSchema = Yup.object({
  title: Yup.string().required('CAMPO REQUERIDO'),
  description: Yup.string().required('CAMPO REQUERIDO'),
  priority: Yup.number().required('CAMPO REQUERIDO'),
});

export const recoverValidationsSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'CORREO ELECTRÓNICO INVÁLIDO')
    .required('CAMPO REQUERIDO'),
});

export const passwordResetValidationSchema = Yup.object({
  code: Yup.string().required('CORREO ELECTRÓNICO INVÁLIDO'),
  password: Yup.string()
    .min(6, 'MÍNIMO DE CARACTERES: 6')
    .required('CAMPO REQUERIDO'),
});
