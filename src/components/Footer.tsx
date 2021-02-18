import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import { Button, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react';
import { TextInput } from './common/TextInput';
import { newsLetterValidationSchema } from './common/validationSchemas';
import { Link } from 'react-scroll';

interface newsLetterValuesProp {
  email: string;
  error?: string;
}

export const Footer = () => {
  const initialValues = {
    email: '',
  };

  return (
    <Segment style={{ marginTop: '50px' }}>
      <Header as='h2' textAlign='center' content='ADOPTME.CR' />
      <Grid>
        <Grid.Column width={10}>
          <h3>
            SEGUIR <span>#ADOPTMECR</span>{' '}
          </h3>
          <div>
            <Icon size='large' name='facebook' />
            <Icon size='large' name='instagram' />
            <Icon size='large' name='twitter' />
          </div>
        </Grid.Column>

        <Grid.Column width={6}>
          <h3>NEWSLETTER</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={newsLetterValidationSchema}
            onSubmit={(
              values: newsLetterValuesProp,
              helpers: FormikHelpers<newsLetterValuesProp>
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
            {(props: FormikProps<newsLetterValuesProp>) => (
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
                  placeholder='EMAIL'
                  value={props.values.email}
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
                  content='SUBSCRIBIR'
                />
              </Form>
            )}
          </Formik>
        </Grid.Column>
      </Grid>
      <Link to='nav' spy={true} smooth={true}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'black',
          }}
        >
          <h4>VOLVER ARRIBA</h4>
          <Icon name='arrow up' />
        </div>
      </Link>
    </Segment>
  );
};
