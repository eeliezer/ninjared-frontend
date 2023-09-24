import React from 'react';
import { Formik } from 'formik';

import { LoginInput } from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, LoginContainerStyled, LoginEmailStyled } from './RegisterStyles';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
//import { useDispatch } from 'react-redux';
//import { setCurrentUser } from '../../redux/user/userSlice';
import { createUser } from '../../axios/axios-user';
import { useRedirect } from '../../hooks/useRedirect';

const Register = () => {
  //const dispatch = useDispatch();
  useRedirect('/');
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const { name, email, password } = values;
          const user = await createUser(name, email, password);
          actions.resetForm();
          alert('¡Usuario creado, ahora puedes iniciar sesión con tus datos!');
          return user;
          /*if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }*/
        }}
      >
        <Form>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <Submit>Registrarte</Submit>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tienes cuenta? Inicia sesión aquí</p>
          </LoginEmailStyled>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
