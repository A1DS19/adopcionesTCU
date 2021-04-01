import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export function NotFound404() {
  return (
    <Grid divided centered text-align='center'>
      <Grid.Column width={4}>
        <h1>404</h1>
        <h3>Pagina no encontrada</h3>
      </Grid.Column>
      <Grid.Column width={6}>
        <Button
          style={{ marginTop: '17px' }}
          as={Link}
          size='large'
          icon='left arrow'
          color='orange'
          content='VOLVER'
          to='/'
        />
      </Grid.Column>
    </Grid>
  );
}
