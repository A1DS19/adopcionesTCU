import React from 'react';
import { Formik, FormikHelpers, FormikProps, Form } from 'formik';
import { Button, Label } from 'semantic-ui-react';
import { TextInput } from '../../common/TextInput';
import { TextArea } from '../../common/TextArea';
import { contactFormValidationSchema } from '../../common/validationSchemas';
import { useDispatch } from 'react-redux';
import { PetsData } from '../../../actions/pets/petsInterfaces';

export interface ContactFormProps {
  message: string;
  email: string;
  cellNumber: string;
  error?: string;
}

interface Props {
  selectedPet: PetsData | undefined;
}

export const ContactForm: React.FC<Props> = ({ selectedPet }) => {
  const dispatch = useDispatch();

  const initialValues: ContactFormProps = {
    message: '',
    email: '',
    cellNumber: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormValidationSchema}
      onSubmit={async (
        values: ContactFormProps,
        helpers: FormikHelpers<ContactFormProps>
      ) => {
        try {
          helpers.setSubmitting(true);
          console.log(values);
        } catch (error) {
          helpers.setErrors({ error: error.message });
        } finally {
          helpers.setSubmitting(false);
        }
      }}
    >
      {(props: FormikProps<ContactFormProps>) => (
        <Form className='ui form'>
          {props.errors.error && (
            <Label
              basic
              style={{ marginBottom: 10 }}
              color='red'
              content={props.errors.error}
            />
          )}
          <TextInput
            name='email'
            placeholder='Email'
            value={props.values.email}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />

          <TextInput
            name='cellNumber'
            placeholder='Numero Telefonico'
            value={props.values.cellNumber}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />

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
