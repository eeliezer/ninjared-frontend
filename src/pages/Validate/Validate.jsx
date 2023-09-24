import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginInput } from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';
import {
  Form,
  ValidateContainerStyled,
  TitleValidateStyled,
  ValidateSubtittle,
} from './ValidateStyles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';
import { validateInitialValues, validateValidationSchema } from '../../formik';
import { setVerified } from '../../redux/user/userSlice';

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <TitleValidateStyled>VALIDA TU CUENTA</TitleValidateStyled>
      <ValidateSubtittle>
        INGRESA EL CÓDIGO QUE TE ENVIAMOS POR CORREO
      </ValidateSubtittle>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async values => {
          await verifyUser(currentUser.email, values.code);
          dispatch(setVerified());
          navigate('/');
        }}
      >
        <Form autocomplete='off'>
          <LoginInput
            name='code'
            type='code'
            placeholder='INGRESA EL CODIGO DE VERIFICACIÓN'
          />
          <Submit>Validar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;
