import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import { Button, Grid, Header, Tab } from 'semantic-ui-react';
import { ErrorLabel } from '../common/ErrorLabel';
import { AuthPayload } from '../../actions/auth';
import { TextInput } from '../common/TextInput';
import { PhotoUpload } from './CambiarFoto';
import { updateCurrentUser } from '../../actions/auth';
import { updatePersonalDataValidationSchema } from '../common/validationSchemas';
import { useDispatch } from 'react-redux';

interface Props {
  loading: boolean;
  currentUser: AuthPayload | null;
}

interface FormValues {
  name?: string;
  lastName?: string;
  displayName?: string;
  error?: string;
}

export const MisDatosTab: React.FC<Props> = ({ loading, currentUser }) => {
  const dispatch = useDispatch();

  const initialValues: FormValues = {
    name: currentUser?.name || '',
    lastName: currentUser?.lastName || '',
    displayName: currentUser?.displayName || '',
  };

  return (
    <Tab.Pane loading={loading} attached={false}>
      <Header content='Actualizar Datos Personales' />
      <Formik
        validationSchema={updatePersonalDataValidationSchema}
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values: FormValues, helpers: FormikHelpers<FormValues>) => {
          try {
            helpers.setSubmitting(true);
            dispatch(updateCurrentUser(currentUser?.id, values));
          } catch (error) {
            helpers.setErrors({ error: error.message });
          } finally {
            helpers.setSubmitting(false);
          }
        }}
      >
        {(props: FormikProps<FormValues>) => (
          <Grid>
            <Grid.Column width={9}>
              <Form className='ui form'>
                {props.errors.error && <ErrorLabel errorMessage={props.errors.error} />}

                <TextInput
                  name='displayName'
                  label='Usuario'
                  placeholder='Usuario'
                  value={props.values.displayName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <TextInput
                  name='name'
                  label='Nombre'
                  placeholder='Nombre'
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <TextInput
                  name='lastName'
                  label='Apellido'
                  placeholder='Apellido'
                  value={props.values.lastName}
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
                  content='ACTUALIZAR DATOS'
                />
              </Form>
            </Grid.Column>
            <Grid.Column width={7}>
              <PhotoUpload currentUser={currentUser} />
            </Grid.Column>
          </Grid>
        )}
      </Formik>
    </Tab.Pane>
  );
};
