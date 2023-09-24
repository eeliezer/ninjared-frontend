import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import { LoginInput } from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
  LoginInputContainer,
} from './LoginStyles';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../axios/axios-user';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useRedirect } from '../../hooks/useRedirect';

const Login = () => {
  const dispatch = useDispatch();
  useRedirect('/');

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          const { email, password } = values;
          const user = await loginUser(email, password);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <Form>
          <LoginInputContainer>
            <LoginInput name='email' type='text' placeholder='Email' />
            <LoginInput
              name='password'
              type='password'
              placeholder='Password'
            />
            <Submit>Login</Submit>
          </LoginInputContainer>
          {
            <Link to='/forgot-password'>
              <LoginPasswordStyled>
                ¿Olvidaste la contraseña? Reestablecela
              </LoginPasswordStyled>
            </Link>
          }
          <Link to='/register'>
            <LoginEmailStyled>
              ¿Aún no te has registrado? Haz Click Aquí
            </LoginEmailStyled>
          </Link>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
