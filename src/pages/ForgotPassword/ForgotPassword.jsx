import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginInput } from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import { recoverValidationsSchema } from '../../formik/validationSchema';
import { recoverInitialValues } from '../../formik/initialValues';
import { recoverPassword } from '../../axios/axios-user';
import {
  ForgotContainerStyled,
  Form,
  ButtonContainer,
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <ForgotContainerStyled>
      <h1>RESTABLECE TU CONTRASEÑA</h1>
      <Formik
        initialValues={recoverInitialValues}
        validationSchema={recoverValidationsSchema}
        onSubmit={async values => {
          await recoverPassword(values.email);
          navigate('/reset-password');
          alert('REVISA EL CÓDIGO QUE TE ENVIAMOS A TU CORREO');
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Email' />
          <ButtonContainer>
            <Submit>INGRESAR</Submit>
          </ButtonContainer>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
