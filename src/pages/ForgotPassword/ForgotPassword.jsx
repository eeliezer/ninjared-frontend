import React /*, { useState }*/ from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginInput } from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import { recoverValidationsSchema } from '../../formik/validationSchema';
import { recoverInitialValues } from '../../formik/initialValues';
import { recoverPassword } from '../../axios/axios-user';
import {
  ForgotContainerStyled,
  //ForgotEmailStyled,
  Form,
  ButtonContainer,
} from './ForgotPasswordStyles';
//import { createGlobalStyle } from 'styled-components';
//import { useDispatch } from 'react-redux';
//import { setCurrentUser } from '../../redux/user/userSlice';
//import { loginUser } from '../../axios/axios-user';
//import Loader from '../../components/UI/Loader/Loader';

const ForgotPassword = () => {
  //  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const [isLoading, setIsLoading] = useState(false);

  /*   const handleRegistro = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(
        'Se ha enviado un correo electrónico, para que restablezcas tu contraseña'
      );
    }, 4000);
  }; */
  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
      <Formik
        initialValues={recoverInitialValues}
        validationSchema={recoverValidationsSchema}
        onSubmit={async values => {
          console.log(values);
          await recoverPassword(values.email);
          navigate('/reset-password');
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Email' />
          <ButtonContainer>
            <Submit /* 
              type='button'
              onClick={e => e.preventDefault(handleRegistro())} */
            >
              Ingresar
            </Submit>
            {/*  {isLoading && <Loader />} */}
          </ButtonContainer>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
