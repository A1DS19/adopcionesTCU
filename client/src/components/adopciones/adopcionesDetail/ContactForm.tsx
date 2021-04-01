import React, { Fragment } from 'react';
import { Formik, FormikHelpers, FormikProps, Form } from 'formik';
import { Button, Label } from 'semantic-ui-react';
import { TextInput } from '../../common/TextInput';
import { TextArea } from '../../common/TextArea';
import {
  currentUserFormValidationSchema,
  noCurrentUserFormValidationSchema,
} from '../../common/validationSchemas';
import { useDispatch } from 'react-redux';
import { PetsData } from '../../../actions/pets/petsInterfaces';
import { ErrorLabel } from '../../common/ErrorLabel';
import { AuthPayload } from '../../../actions/auth';
import { sendEmail } from '../../../actions/pets/pets';

export interface ContactFormProps {
  message: string;
  email: string;
  userName: string;
  error?: string;
}

interface Props {
  selectedPet: PetsData | undefined;
  currentUser: AuthPayload | undefined | null;
}

export const ContactForm: React.FC<Props> = ({ selectedPet, currentUser }) => {
  const dispatch = useDispatch();
  console.log(selectedPet);

  const initialValues: ContactFormProps = {
    message: '',
    email: currentUser?.email || '',
    userName: currentUser ? `${currentUser.name} ${currentUser.lastName}` : '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        currentUser ? currentUserFormValidationSchema : noCurrentUserFormValidationSchema
      }
      onSubmit={async (
        values: ContactFormProps,
        helpers: FormikHelpers<ContactFormProps>
      ) => {
        try {
          helpers.setSubmitting(true);
          dispatch(sendEmail(selectedPet?.id, values));
        } catch (error) {
          helpers.setErrors({ error: error.message });
        } finally {
          helpers.setSubmitting(false);
        }
      }}
    >
      {(props: FormikProps<ContactFormProps>) => (
        <Form className='ui form'>
          {props.errors.error && <ErrorLabel errorMessage={props.errors.error} />}
          {!currentUser && (
            <Fragment>
              <TextInput
                name='email'
                placeholder='Email'
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />

              <TextInput
                name='userName'
                placeholder='Su nombre'
                value={props.values.userName}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
            </Fragment>
          )}

          <TextArea
            name='message'
            placeholder={`Me pregunto si ${selectedPet?.name}...`}
            value={props.values.message}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />

          <Button
            loading={props.isSubmitting}
            disabled={!props.isValid || !props.dirty || props.isSubmitting}
            type='submit'
            fluid
            size='large'
            color='orange'
            content='ENVIAR'
          />
        </Form>
      )}
    </Formik>
  );
};
