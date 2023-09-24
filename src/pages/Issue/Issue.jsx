import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from './issueCss.css';
import {
  LoginInput,
  IssueInput,
} from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, ValidateContainerStyled, TittleIssue } from './IssueStyles';
import { useSelector } from 'react-redux';
import { issueInitialValues, issueValidationSchema } from '../../formik';
import { ADMIN } from '../../utils';
import { createIssue } from './../../axios/axios-issues';

const Issue = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.rol !== ADMIN) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <TittleIssue>INGRESE SU REPORTE</TittleIssue>
      <Formik
        initialValues={issueInitialValues}
        validationSchema={issueValidationSchema}
        onSubmit={async values => {
          await createIssue(
            values.title,
            values.description,
            values.priority,
            currentUser
          );
          navigate('/');
        }}
      >
        <Form>
          <LoginInput
            name='title'
            type='text'
            placeholder='TITULO DEL REPORTE'
          />
          <IssueInput
            className={styles.inputDescription}
            name='description'
            type='text'
            placeholder='DESCRIPCIÓN'
            maxlength='25'
          />
          <LoginInput name='priority' type='number' placeholder='PRIORIDAD' />
          <Submit>CREAR REPORTE</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Issue;
