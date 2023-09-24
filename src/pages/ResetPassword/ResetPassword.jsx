import React /*, { useState }*/ from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginInput } from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import { passwordResetValidationSchema } from '../../formik/validationSchema';
import { passwordResetInitialValues } from '../../formik/initialValues';
import { passwordReset } from '../../axios/axios-user';
import { setPassword } from '../../redux/user/userSlice';
import {
  ForgotContainerStyled,
  ForgotEmailStyled,
  Form,
  ButtonContainer,
} from './ResetPasswordStyles';
//import { useDispatch } from 'react-redux';
//import { setCurrentUser } from '../../redux/user/userSlice';
//import { loginUser } from '../../axios/axios-user';
//import Loader from '../../components/UI/Loader/Loader';

const ForgotPassword = () => {
  //  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <h1>RESTABLECE TU CONTRASEÑA</h1>
      <h2>HEMOS ENVIADO UN CODIGO DE VERIFICACIÓN A TU CORREO</h2>
      <Formik
        initialValues={passwordResetInitialValues}
        validationSchema={passwordResetValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await passwordReset(values.password, values.code);
          actions.resetForm(navigate('/'));
          dispatch(
            setPassword({
              ...user.user.password,
            })
          );
        }}
      >
        <Form>
          <LoginInput name='password' type='password' placeholder='PASSWORD' />
          <LoginInput name='code' type='text' placeholder='CÓDIGO' />
          <ButtonContainer>
            <Submit /* 
              type='button'
              onClick={e => e.preventDefault(handleRegistro())} */
            >
              INGRESAR
            </Submit>
            {/*  {isLoading && <Loader />} */}
            <ForgotEmailStyled onClick={() => navigate('/login')}>
              VOLVER A INICIAR SESIÓN
            </ForgotEmailStyled>
          </ButtonContainer>
        </Form>
      </Formik>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;
