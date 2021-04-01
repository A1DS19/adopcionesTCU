import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Confirm, Header, Tab } from 'semantic-ui-react';
import { AuthPayload, deleteUser, updateUserPassword } from '../../actions/auth';
import { TextInput } from '../common/TextInput';
import { updatePasswordValidationSchema } from '../common/validationSchemas';

interface Props {
  loading: boolean;
  currentUser: AuthPayload | null;
}

interface FormValues {
  newPassword: string;
  confirmPassword: string;
  oldPassword: string;
  error?: string;
}

export const AjustesCuenta: React.FC<Props> = ({ loading, currentUser }) => {
  const [openConfirm, setConfirm] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues: FormValues = {
    newPassword: '',
    confirmPassword: '',
    oldPassword: '',
  };

  const handleDeleteAccount = () => {
    dispatch(deleteUser(currentUser?.id?.toString()!));
    setConfirm(false);
  };

  return (
    <Tab.Pane attached={false}>
      <Header content='Crear nueva Contrasena' />
      <Formik
        initialValues={initialValues}
        validationSchema={updatePasswordValidationSchema}
        onSubmit={(values: FormValues, helpers: FormikHelpers<FormValues>) => {
          try {
            helpers.setSubmitting(true);
            dispatch(updateUserPassword(currentUser?.id?.toString()!, values));
            history.push(`/`);
          } catch (error) {
            helpers.setErrors({ error: error.message });
          } finally {
            helpers.setSubmitting(false);
          }
        }}
      >
        {(props: FormikProps<FormValues>) => (
          <Form className='ui form' style={{ maxWidth: '450px' }}>
            <TextInput
              name='oldPassword'
              label='Antigua Contrasena'
              placeholder='Antigua Contrasena'
              type='password'
              value={props.values.oldPassword}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <TextInput
              name='newPassword'
              label='Nueva Contrasena'
              type='password'
              placeholder='Nueva Contrasena'
              value={props.values.newPassword}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <TextInput
              name='confirmPassword'
              type='password'
              label='Confirmar Nueva Contrasena'
              placeholder='Confirmar Nueva Contrasena'
              value={props.values.confirmPassword}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <Button
              loading={props.isSubmitting}
              disabled={!props.isValid || !props.dirty || props.isSubmitting}
              fluid
              type='submit'
              size='large'
              color='orange'
              content='ACTUALIZAR CONTRASENA'
            />
          </Form>
        )}
      </Formik>

      <div style={{ maxWidth: '450px', marginTop: '15px' }}>
        <Header color='red' content='Eliminar Cuenta' />
        <Button
          onClick={() => setConfirm(true)}
          inverted
          color='red'
          size='large'
          content='ELIMINAR CUENTA'
          fluid
        />
      </div>

      <Confirm
        content='Esta seguro que desea borrar su cuenta?'
        cancelButton='CANCELAR'
        confirmButton='BORRAR'
        open={openConfirm}
        onCancel={() => setConfirm(false)}
        onConfirm={handleDeleteAccount}
      />
    </Tab.Pane>
  );
};
