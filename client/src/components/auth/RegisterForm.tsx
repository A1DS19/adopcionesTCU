import React from 'react';
import { Formik, FormikHelpers, FormikProps, Form } from 'formik';
import { Button, Divider, Label } from 'semantic-ui-react';
import { TextInput } from '../common/TextInput';
import { registerValidationSchema } from '../common/validationSchemas';
import { ModalWrapper } from '../common/modals/ModalWrapper';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modals';
import { SocialLogin } from './SocialLogin';
import { registerUser } from '../../actions/auth';
import { ErrorLabel } from '../common/ErrorLabel';

export interface RegisterFormValues {
  email: string;
  password: string;
  displayName: string;
  authError?: string;
}

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues: RegisterFormValues = {
    email: '',
    displayName: '',
    password: '',
  };

  return (
    <ModalWrapper header='REGISTRO' size='mini'>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (
          values: RegisterFormValues,
          helpers: FormikHelpers<RegisterFormValues>
        ) => {
          try {
            helpers.setSubmitting(true);
            dispatch(registerUser(values));
          } catch (error) {
            helpers.setErrors({ authError: error });
          } finally {
            helpers.setSubmitting(false);
          }
        }}
      >
        {(props: FormikProps<RegisterFormValues>) => (
          <Form className='ui form'>
            {props.errors.authError && (
              <ErrorLabel errorMessage={props.errors.authError} />
            )}
            <TextInput
              name='email'
              placeholder='EMAIL'
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <TextInput
              name='displayName'
              placeholder='NOMBRE USUARIO'
              value={props.values.displayName}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />

            <TextInput
              type='password'
              name='password'
              placeholder='CONTRASENA'
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />

            <Button
              loading={props.isSubmitting}
              disabled={!props.isValid || !props.dirty || props.isSubmitting}
              type='submit'
              fluid
              size='large'
              color='teal'
              content='REGISTRO'
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export { RegisterForm };
